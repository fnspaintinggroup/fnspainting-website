param(
  [string]$Message = "Update F&S Painting website",
  [string]$LiveDir = "$env:USERPROFILE\Documents\fs-painting-live-auto"
)

$ErrorActionPreference = "Stop"

$SourceDir = Split-Path -Parent $PSScriptRoot
$RepoUrl = "https://github.com/fnspaintinggroup/fnspainting-website.git"

function Run-Git {
  & git @args
  if ($LASTEXITCODE -ne 0) {
    throw "Git command failed: git $($args -join ' ')"
  }
}

Write-Host "Source: $SourceDir"
Write-Host "Live clone: $LiveDir"

if (-not (Test-Path $LiveDir)) {
  Write-Host "Cloning live GitHub repository..."
  Run-Git clone $RepoUrl $LiveDir
} else {
  Write-Host "Updating existing live clone..."
  Push-Location $LiveDir
  try {
    Run-Git fetch origin main
    Run-Git checkout main
    Run-Git reset --hard origin/main
    Run-Git clean -fd
  } finally {
    Pop-Location
  }
}

$excludeDirs = @(".git", "node_modules", ".next", ".npm-cache", ".codex-tools")
$excludeFiles = @(".env", ".env.local")

Write-Host "Copying current website files into the live clone..."
robocopy $SourceDir $LiveDir /MIR /XD $excludeDirs /XF $excludeFiles
$robocopyCode = $LASTEXITCODE
if ($robocopyCode -gt 7) {
  throw "Robocopy failed with exit code $robocopyCode"
}

Push-Location $LiveDir
try {
  Run-Git config --global --add safe.directory ($LiveDir -replace "\\", "/")

  $changes = git status --porcelain
  if (-not $changes) {
    Write-Host "No changes to deploy."
    exit 0
  }

  Write-Host "Changes to deploy:"
  git status --short

  Run-Git add -A
  Run-Git commit -m $Message
  Run-Git push origin main

  Write-Host "Deploy push complete. Vercel should start a production deployment from main."
} finally {
  Pop-Location
}
