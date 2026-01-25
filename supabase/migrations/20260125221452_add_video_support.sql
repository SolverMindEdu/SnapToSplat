/*
  # Add Video Support

  1. Schema Changes
    - Add `media_type` column to `photos` table to distinguish between images and videos
    - Add `mime_type` column to store the exact MIME type
    - Update indexes and constraints

  2. Notes
    - Existing records will default to 'image' type
    - The table name remains 'photos' for backwards compatibility, but now supports videos too
    - Valid media_type values: 'image', 'video'
*/

-- Add media_type column to photos table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'photos' AND column_name = 'media_type'
  ) THEN
    ALTER TABLE photos ADD COLUMN media_type text DEFAULT 'image' NOT NULL;
  END IF;
END $$;

-- Add mime_type column to photos table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'photos' AND column_name = 'mime_type'
  ) THEN
    ALTER TABLE photos ADD COLUMN mime_type text;
  END IF;
END $$;

-- Add check constraint for media_type
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'photos_media_type_check'
  ) THEN
    ALTER TABLE photos ADD CONSTRAINT photos_media_type_check
      CHECK (media_type IN ('image', 'video'));
  END IF;
END $$;

-- Create index on media_type for filtering
CREATE INDEX IF NOT EXISTS idx_photos_media_type ON photos(media_type);