/*
  # Fix Deletion and Add Preview URL

  1. Changes
    - Drop restrictive delete policy on contributions table
    - Add new policy allowing anyone to delete contributions
    - Add model_preview_url column to contributions table for STL embed links
    
  2. Security
    - Allow public deletion for demo purposes (can be restricted later with auth)
    - Preview URL is optional and will be populated after admin trains the model
*/

-- Drop the old restrictive delete policy
DROP POLICY IF EXISTS "Anyone can update their recent contributions" ON contributions;

-- Add new delete policy that allows anyone to delete
CREATE POLICY "Anyone can delete contributions"
  ON contributions
  FOR DELETE
  USING (true);

-- Add model_preview_url column for STL embed links
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contributions' AND column_name = 'model_preview_url'
  ) THEN
    ALTER TABLE contributions ADD COLUMN model_preview_url text;
  END IF;
END $$;