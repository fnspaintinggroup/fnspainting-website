param(
  [string]$GitHubToken,
  [string]$CommitMessage = "Update gallery and website photos"
)

$ErrorActionPreference = "Stop"

function Run-Git {
  & git @args
  if ($LASTEXITCODE -ne 0) {
    throw "Git command failed."
  }
}

function Read-Token {
  if (-not [string]::IsNullOrWhiteSpace($GitHubToken)) {
    return $GitHubToken
  }

  $secure = Read-Host "GitHub token" -AsSecureString
  $ptr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)
  try {
    return [Runtime.InteropServices.Marshal]::PtrToStringBSTR($ptr)
  }
  finally {
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($ptr)
  }
}

$repoRoot = Split-Path -Parent $PSScriptRoot
Push-Location $repoRoot
try {
  Get-Process git -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
  Start-Sleep -Seconds 2

  $token = Read-Token
  if ([string]::IsNullOrWhiteSpace($token)) {
    throw "GitHub token is required."
  }

  if ((Test-Path ".git\rebase-merge") -or (Test-Path ".git\rebase-apply")) {
    Write-Host "Aborting conflicted rebase..."
    Run-Git rebase --abort
  }

  $branch = (git branch --show-current).Trim()
  if ([string]::IsNullOrWhiteSpace($branch)) {
    $branch = "main"
    Run-Git checkout $branch
  }

  $backup = "backup-local-complete-before-sync-" + (Get-Date -Format "yyyyMMdd-HHmmss")
  Write-Host "Creating backup branch: $backup"
  Run-Git branch $backup

  Write-Host "Fetching latest GitHub main..."
  Run-Git fetch origin main

  Write-Host "Rebuilding one clean commit on top of GitHub main..."
  Run-Git reset --soft origin/main

  & git diff --cached --quiet
  if ($LASTEXITCODE -eq 1) {
    Run-Git commit -m $CommitMessage
  }
  else {
    Write-Host "No staged differences after sync."
  }

  $pair = "x-access-token:$token"
  $basic = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes($pair))

  Write-Host "Pushing main to GitHub..."
  Run-Git -c "http.extraheader=AUTHORIZATION: basic $basic" push origin main
  Write-Host "GitHub push complete."
}
finally {
  Pop-Location
}
