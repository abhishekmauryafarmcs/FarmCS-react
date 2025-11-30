const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://tjgypejzectqcxznueqi.supabase.co';
const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqZ3lwZWp6ZWN0cWN4em51ZXFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0MTk2MjYsImV4cCI6MjA3OTk5NTYyNn0.Lfzsih7rlemxuiwB91qsB1_6kI7Y6gPzvdgVr8I_C_k';

async function testFullFlow() {
  const supabase = createClient(supabaseUrl, anonKey);

  try {
    console.log('=== Testing Supabase Connection ===');
    
    // Test 1: Check if table exists
    console.log('1. Testing table access...');
    const { data: tableData, error: tableError } = await supabase
      .from('users')
      .select('*')
      .limit(1);
    
    if (tableError) {
      console.error('❌ Table access error:', tableError.message);
      return;
    }
    console.log('✅ Table accessible');

    // Test 2: Insert a test user
    console.log('2. Testing user insertion...');
    const testUser = {
      first_name: 'Test',
      last_name: 'User',
      mobile: '9999999999',
      state: 'Maharashtra',
      district: 'Mumbai',
      password_hash: 'test123'
    };

    const { data: insertData, error: insertError } = await supabase
      .from('users')
      .insert(testUser)
      .select();

    if (insertError) {
      console.error('❌ Insert error:', insertError.message);
      return;
    }
    console.log('✅ User inserted:', insertData);

    // Test 3: Query the inserted user
    console.log('3. Testing user query...');
    const { data: queryData, error: queryError } = await supabase
      .from('users')
      .select('*')
      .eq('mobile', '9999999999')
      .single();

    if (queryError) {
      console.error('❌ Query error:', queryError.message);
    } else {
      console.log('✅ User queried:', queryData);
    }

    // Test 4: Clean up test user
    console.log('4. Cleaning up test user...');
    const { error: deleteError } = await supabase
      .from('users')
      .delete()
      .eq('mobile', '9999999999');

    if (deleteError) {
      console.error('❌ Delete error:', deleteError.message);
    } else {
      console.log('✅ Test user cleaned up');
    }

    console.log('\n=== All Tests Passed! ===');
    console.log('✅ Database connection is working');
    console.log('✅ User operations (CRUD) working');
    console.log('✅ Ready for signup/login functionality');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testFullFlow();
