-- Fix RLS policies to allow anonymous inserts for signup
-- Drop existing policies
DROP POLICY IF EXISTS "Users can only view their own data" ON users;
DROP POLICY IF EXISTS "Users can insert their own data" ON users;
DROP POLICY IF EXISTS "Users can update their own data" ON users;

-- Create new policies that allow signup without auth
CREATE POLICY "Enable insert for all users" ON users
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read for all users" ON users
    FOR SELECT USING (true);

CREATE POLICY "Enable update for all users" ON users
    FOR UPDATE USING (true);

-- Temporarily disable RLS for initial testing
ALTER TABLE users DISABLE ROW LEVEL SECURITY;
