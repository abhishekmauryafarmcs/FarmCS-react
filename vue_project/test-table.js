const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://tjgypejzectqcxznueqi.supabase.co';
const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqZ3lwZWp6ZWN0cWN4em51ZXFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0MTk2MjYsImV4cCI6MjA3OTk5NTYyNn0.Lfzsih7rlemxuiwB91qsB1_6kI7Y6gPzvdgVr8I_C_k';

async function createTable() {
  const supabase = createClient(supabaseUrl, anonKey);

  try {
    // Try to insert a test record to see if table exists
    const testData = {
      first_name: 'test',
      last_name: 'user',
      mobile: '0000000000',
      state: 'test',
      district: 'test',
      password_hash: 'test'
    };

    console.log('Testing if users table exists...');
    const { data, error } = await supabase
      .from('users')
      .insert(testData);

    if (error) {
      console.log('Table likely does not exist yet');
      console.log('Error:', error.message);
      console.log('\nPlease run the SQL manually in Supabase Dashboard:');
      console.log('1. Go to: https://supabase.com/dashboard/project/tjgypejzectqcxznueqi');
      console.log('2. Click "SQL Editor"');
      console.log('3. Run the SQL from push-database.js');
    } else {
      console.log('Table exists! Test record inserted:', data);
      
      // Clean up test record
      await supabase
        .from('users')
        .delete()
        .eq('mobile', '0000000000');
      
      console.log('Test record cleaned up');
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

createTable();
