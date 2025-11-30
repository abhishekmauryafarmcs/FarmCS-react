#!/bin/bash

# Replace YOUR_SERVICE_ROLE_KEY with your actual service role key
# Get it from: https://supabase.com/dashboard/project/tjgypejzectqcxznueqi/settings/api
SERVICE_ROLE_KEY="YOUR_SERVICE_ROLE_KEY_HERE"
PROJECT_REF="tjgypejzectqcxznueqi"

if [ "$SERVICE_ROLE_KEY" = "YOUR_SERVICE_ROLE_KEY_HERE" ]; then
    echo "Please update SERVICE_ROLE_KEY with your actual service role key"
    echo "Get it from: https://supabase.com/dashboard/project/$PROJECT_REF/settings/api"
    exit 1
fi

# Create users table
echo "Creating users table..."
curl -X POST "https://$PROJECT_REF.supabase.co/rest/v1/users" \
  -H "apikey: $SERVICE_ROLE_KEY" \
  -H "Authorization: Bearer $SERVICE_ROLE_KEY" \
  -H "Content-Type: application/json" \
  -H "Prefer: return=minimal" \
  -d '{
    "id": 1,
    "first_name": "test",
    "last_name": "user", 
    "mobile": "0000000000",
    "state": "test",
    "district": "test",
    "password_hash": "test"
  }' 2>/dev/null

echo ""
echo "If you see no errors above, the table was created successfully!"
echo "Now run the full SQL migration in your dashboard for complete setup."
