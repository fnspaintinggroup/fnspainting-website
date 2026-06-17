param(
  [string]$GitHubToken,
  [string]$VercelToken,
  [string]$VercelProjectName,
  [string]$VercelOrgId,
  [string]$VercelProjectId,
  [string]$CommitMessage = "Update F&S Painting website",
  [switch]$SkipLocalBuild
)

$ErrorActionPreference = "Stop"

function Ask-Value {
  param(
    [string]$Label,
    [string]$CurrentValue
  )

  if (-not [string]::IsNullOrWhiteSpace($CurrentValue)) {
    return $CurrentValue
  }

  $value = Read-Host $Label
  if ([string]::IsNullOrWhiteSpace($value)) {
    throw "Missing value: $Label"
  }

  return $value
}

function Set-EnvIfValue {
  param(
    [string]$Name,
    [string]$Value
  )

  if (-not [string]::IsNullOrWhiteSpace($Value)) {
    [Environment]::SetEnvironmentVariable($Name, $Value, "Process")
  }
}

$repoRoot = Split-Path -Parent $PSScriptRoot
$helperScript = Join-Path $env:USERPROFILE ".codex\skills\website-update-and-deploy\scripts\deploy-website.ps1"

if (-not (Test-Path $helperScript)) {
  throw "Deployment helper was not found at: $helperScript"
}

Write-Host ""
Write-Host "F&S Painting website deployment"
Write-Host "Repo: $repoRoot"
Write-Host ""

$GitHubToken = Ask-Value -Label "GitHub token" -CurrentValue $GitHubToken
$VercelToken = Ask-Value -Label "Vercel token" -CurrentValue $VercelToken

if (-not (Test-Path (Join-Path $repoRoot ".vercel\project.json"))) {
  if ([string]::IsNullOrWhiteSpace($VercelOrgId) -or [string]::IsNullOrWhiteSpace($VercelProjectId)) {
    if ([string]::IsNullOrWhiteSpace($VercelProjectName)) {
      $VercelProjectName = Read-Host "Vercel project name (leave blank if you will enter Org ID and Project ID)"
    }

    if ([string]::IsNullOrWhiteSpace($VercelProjectName)) {
      $VercelOrgId = Ask-Value -Label "Vercel Org ID" -CurrentValue $VercelOrgId
      $VercelProjectId = Ask-Value -Label "Vercel Project ID" -CurrentValue $VercelProjectId
    }
  }
}

Set-EnvIfValue -Name "GITHUB_TOKEN" -Value $GitHubToken
Set-EnvIfValue -Name "VERCEL_TOKEN" -Value $VercelToken
Set-EnvIfValue -Name "VERCEL_PROJECT_NAME" -Value $VercelProjectName
Set-EnvIfValue -Name "VERCEL_ORG_ID" -Value $VercelOrgId
Set-EnvIfValue -Name "VERCEL_PROJECT_ID" -Value $VercelProjectId

$scriptArgs = @(
  "-ExecutionPolicy",
  "Bypass",
  "-File",
  $helperScript,
  "-RepoPath",
  $repoRoot,
  "-CommitMessage",
  $CommitMessage
)

if ($SkipLocalBuild) {
  $scriptArgs += "-SkipLocalBuild"
}

Write-Host ""
Write-Host "Starting GitHub push and Vercel production deployment..."
Write-Host ""

& powershell @scriptArgs

if ($LASTEXITCODE -ne 0) {
  throw "Deployment failed with exit code $LASTEXITCODE"
}

