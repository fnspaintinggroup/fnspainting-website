param(
  [string]$GitHubToken,
  [string]$VercelToken,
  [string]$VercelProjectName,
  [string]$VercelOrgId,
  [string]$VercelProjectId
)

$ErrorActionPreference = "Stop"

function Read-SecretValue {
  param(
    [string]$Label,
    [string]$CurrentValue,
    [switch]$Optional
  )

  if (-not [string]::IsNullOrWhiteSpace($CurrentValue)) {
    return $CurrentValue
  }

  $secure = Read-Host $Label -AsSecureString
  $ptr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)
  try {
    $value = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($ptr)
    if (-not $Optional -and [string]::IsNullOrWhiteSpace($value)) {
      throw "$Label is required."
    }
    return $value
  }
  finally {
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($ptr)
  }
}

function Read-PlainValue {
  param(
    [string]$Label,
    [string]$CurrentValue
  )

  if (-not [string]::IsNullOrWhiteSpace($CurrentValue)) {
    return $CurrentValue
  }

  return Read-Host $Label
}

$GitHubToken = Read-SecretValue -Label "GitHub token" -CurrentValue $GitHubToken
$VercelToken = Read-SecretValue -Label "Vercel token" -CurrentValue $VercelToken
$VercelProjectName = Read-PlainValue -Label "Vercel project name, for example fnspainting-website (optional if you use Org ID and Project ID)" -CurrentValue $VercelProjectName

if ([string]::IsNullOrWhiteSpace($VercelProjectName)) {
  $VercelOrgId = Read-SecretValue -Label "Vercel Org ID" -CurrentValue $VercelOrgId
  $VercelProjectId = Read-SecretValue -Label "Vercel Project ID" -CurrentValue $VercelProjectId
}

@"
protocol=https
host=github.com
username=x-access-token
password=$GitHubToken

"@ | git credential approve

if ($LASTEXITCODE -ne 0) {
  throw "Could not save GitHub token."
}

[Environment]::SetEnvironmentVariable("VERCEL_TOKEN", $VercelToken, "User")
[Environment]::SetEnvironmentVariable("VERCEL_PROJECT_NAME", $VercelProjectName, "User")
[Environment]::SetEnvironmentVariable("VERCEL_ORG_ID", $VercelOrgId, "User")
[Environment]::SetEnvironmentVariable("VERCEL_PROJECT_ID", $VercelProjectId, "User")

Write-Host "Deploy tokens saved. Open a new PowerShell window before running deployment commands."
