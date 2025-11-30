# Replace YOUR_SERVICE_ROLE_KEY with your actual service role key
# Get it from: https://supabase.com/dashboard/project/tjgypejzectqcxznueqi/settings/api
$SERVICE_ROLE_KEY = "YOUR_SERVICE_ROLE_KEY_HERE"
$PROJECT_REF = "tjgypejzectqcxznueqi"

if ($SERVICE_ROLE_KEY -eq "YOUR_SERVICE_ROLE_KEY_HERE") {
    Write-Host "Please update SERVICE_ROLE_KEY with your actual service role key"
    Write-Host "Get it from: https://supabase.com/dashboard/project/$PROJECT_REF/settings/api"
    exit 1
}

Write-Host "Attempting to create users table..."

$headers = @{
    'apikey' = $SERVICE_ROLE_KEY
    'Authorization' = "Bearer $SERVICE_ROLE_KEY"
    'Content-Type' = 'application/json'
    'Prefer' = 'return=minimal'
}

$body = @{
    'id' = 1
    'first_name' = 'test'
    'last_name' = 'user'
    'mobile' = '0000000000'
    'state' = 'test'
    'district' = 'test'
    'password_hash' = 'test'
} | ConvertTo-Json

try {
    $response = Invoke-WebRequest -Uri "https://$PROJECT_REF.supabase.co/rest/v1/users" `
        -Method POST `
        -Headers $headers `
        -Body $body `
        -ErrorAction Stop
    
    Write-Host "Table creation response: $($response.StatusCode)"
    Write-Host "Users table should now exist!"
} catch {
    Write-Host "Error: $($_.Exception.Message)"
    Write-Host "This might mean the table already exists or there's a permission issue"
}
