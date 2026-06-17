param(
  [string]$CommitMessage = "Update F&S Painting website"
)

$ErrorActionPreference = "Stop"

function Run-Step {
  param(
    [string]$FilePath,
    [string[]]$Arguments,
    [string]$Label
  )

  Write-Host "==> $Label"
  & $FilePath @Arguments
  if ($LASTEXITCODE -ne 0) {
    throw "$Label failed."
  }
}

function Get-BundledNode {
  $path = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
  if (Test-Path $path) {
    return $path
  }

  $cmd = Get-Command node -ErrorAction SilentlyContinue
  if ($cmd) {
    return $cmd.Source
  }

  throw "Node was not found."
}

function Get-BundledPnpm {
  $path = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules\pnpm\bin\pnpm.cjs"
  if (Test-Path $path) {
    return $path
  }

  throw "pnpm was not found."
}

function Ensure-VercelLink {
  param(
    [string]$NodePath,
    [string]$PnpmPath,
    [string]$VercelToken
  )

  $projectJson = ".vercel\project.json"
  if (Test-Path $projectJson) {
    Write-Host "Vercel project link already exists."
    return
  }

  $orgId = [Environment]::GetEnvironmentVariable("VERCEL_ORG_ID", "User")
  $projectId = [Environment]::GetEnvironmentVariable("VERCEL_PROJECT_ID", "User")
  $projectName = [Environment]::GetEnvironmentVariable("VERCEL_PROJECT_NAME", "User")

  if (-not (Test-Path ".vercel")) {
    New-Item -ItemType Directory -Path ".vercel" | Out-Null
  }

  if (-not [string]::IsNullOrWhiteSpace($orgId) -and -not [string]::IsNullOrWhiteSpace($projectId)) {
    @{ orgId = $orgId; projectId = $projectId } | ConvertTo-Json -Compress | Set-Content -Path $projectJson -Encoding UTF8
    Write-Host "Created Vercel project link from saved IDs."
    return
  }

  if ([string]::IsNullOrWhiteSpace($projectName)) {
    throw "Missing Vercel project link. Run scripts\save-deploy-tokens-once.ps1 first."
  }

  Run-Step $NodePath @(
    $PnpmPath,
    "dlx",
    "vercel",
    "link",
    "--yes",
    "--project",
    $projectName,
    "--token",
    $VercelToken
  ) "Link Vercel project"
}

$repoRoot = Split-Path -Parent $PSScriptRoot
Push-Location $repoRoot
try {
  $pushScript = Join-Path $PSScriptRoot "git-push-saved.ps1"
  Run-Step "powershell" @(
    "-ExecutionPolicy",
    "Bypass",
    "-File",
    $pushScript,
    "-CommitMessage",
    $CommitMessage
  ) "Push to GitHub"

  $vercelToken = [Environment]::GetEnvironmentVariable("VERCEL_TOKEN", "User")
  if ([string]::IsNullOrWhiteSpace($vercelToken)) {
    throw "Missing saved Vercel token. Run scripts\save-deploy-tokens-once.ps1 first."
  }

  $nodePath = Get-BundledNode
  $pnpmPath = Get-BundledPnpm
  $nodeDir = Split-Path -Parent $nodePath
  if ($env:PATH -notlike "*$nodeDir*") {
    $env:PATH = "$nodeDir;$env:PATH"
  }

  Ensure-VercelLink -NodePath $nodePath -PnpmPath $pnpmPath -VercelToken $vercelToken

  Run-Step $nodePath @(
    $pnpmPath,
    "dlx",
    "vercel",
    "deploy",
    "--prod",
    "--yes",
    "--token",
    $vercelToken
  ) "Deploy to Vercel production"
}
finally {
  Pop-Location
}
