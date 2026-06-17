param(
  [string]$CommitMessage = "Update F&S Painting website"
)

$ErrorActionPreference = "Stop"

function Run-Git {
  & git @args
  if ($LASTEXITCODE -ne 0) {
    throw "Git command failed."
  }
}

function Get-SavedGitHubToken {
  $token = [Environment]::GetEnvironmentVariable("GITHUB_TOKEN", "User")
  if ([string]::IsNullOrWhiteSpace($token)) {
    $token = [Environment]::GetEnvironmentVariable("GITHUB_TOKEN", "Process")
  }
  if ([string]::IsNullOrWhiteSpace($token)) {
    throw "Missing saved GitHub token. Run scripts\save-deploy-tokens-once.ps1 first, then open a new PowerShell window."
  }
  return $token
}

function Run-GitHubPush {
  param(
    [string]$Branch,
    [string]$GitHubToken
  )

  $pair = "x-access-token:$GitHubToken"
  $basic = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes($pair))
  & git -c "http.extraheader=AUTHORIZATION: basic $basic" push origin $Branch
  if ($LASTEXITCODE -ne 0) {
    throw "GitHub push failed."
  }
}

$repoRoot = Split-Path -Parent $PSScriptRoot
Push-Location $repoRoot
try {
  Get-Process git -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
  Start-Sleep -Seconds 1

  if ((Test-Path ".git\rebase-merge") -or (Test-Path ".git\rebase-apply")) {
    Write-Host "Aborting conflicted rebase..."
    Run-Git rebase --abort
  }

  $branch = (git branch --show-current).Trim()
  if ([string]::IsNullOrWhiteSpace($branch)) {
    $branch = "main"
    Run-Git checkout $branch
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
  }
  else {
    Write-Host "No local changes to commit."
  }

  Write-Host "Fetching latest GitHub changes..."
  Run-Git fetch origin $branch

  $behind = git rev-list --count "HEAD..origin/$branch"
  if ($LASTEXITCODE -ne 0) {
    throw "Could not compare with GitHub."
  }

  if ([int]$behind -gt 0) {
    Write-Host "GitHub has newer commits. Rebuilding one clean local commit..."
    $backup = "backup-before-sync-" + (Get-Date -Format "yyyyMMdd-HHmmss")
    Run-Git branch $backup
    Run-Git reset --soft "origin/$branch"

    & git diff --cached --quiet
    if ($LASTEXITCODE -eq 1) {
      Run-Git commit -m $CommitMessage
    }
  }

  Write-Host "Pushing branch '$branch' to GitHub..."
  $githubToken = Get-SavedGitHubToken
  Run-GitHubPush -Branch $branch -GitHubToken $githubToken
  Write-Host "GitHub push complete."
}
finally {
  Pop-Location
}
