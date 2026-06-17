param(
  [string]$GitHubToken,
  [string]$CommitMessage = "Update F&S Painting website"
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
  $branch = (git branch --show-current).Trim()
  if ([string]::IsNullOrWhiteSpace($branch)) {
    throw "Could not read the current Git branch."
  }

  $token = Read-Token
  if ([string]::IsNullOrWhiteSpace($token)) {
    throw "GitHub token is required."
  }

  $changes = git status --porcelain
  if ($changes) {
    Write-Host "Staging website changes..."
    Run-Git add -A

    & git diff --cached --quiet
    if ($LASTEXITCODE -eq 1) {
      Write-Host "Creating commit..."
      Run-Git commit -m $CommitMessage
    }
    else {
      Write-Host "No staged changes to commit."
    }
  }
  else {
    Write-Host "No local changes to commit."
  }

  Write-Host "Fetching latest GitHub changes..."
  Run-Git fetch origin $branch

  $upstream = "origin/$branch"
  $behind = git rev-list --count "HEAD..$upstream"
  if ($LASTEXITCODE -ne 0) {
    throw "Could not compare with GitHub."
  }

  if ([int]$behind -gt 0) {
    Write-Host "GitHub has newer commits. Rebasing local commits..."
    Run-Git rebase $upstream
  }
  else {
    Write-Host "Local branch is up to date with GitHub."
  }

  $pair = "x-access-token:$token"
  $basic = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes($pair))

  Write-Host "Pushing branch '$branch' to GitHub..."
  Run-Git -c "http.extraheader=AUTHORIZATION: basic $basic" push origin $branch
  Write-Host "GitHub push complete."
}
finally {
  Pop-Location
}
