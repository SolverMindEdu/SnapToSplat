/*
  # REBUILD-XR Database Schema

  1. New Tables
    - `contributions`
      - `id` (uuid, primary key)
      - `site_name` (text, optional site name)
      - `description` (text, optional description)
      - `country` (text, required)
      - `city_region` (text, optional)
      - `subject_type` (text, what was photographed: ruin, statue, etc.)
      - `latitude` (numeric, confirmed location)
      - `longitude` (numeric, confirmed location)
      - `location_name` (text, final confirmed place name)
      - `photo_count` (integer, number of photos uploaded)
      - `capture_date` (date, when photos were taken)
      - `status` (text, processing status: uploaded, processing, completed)
      - `contributor_email` (text, optional)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `photos`
      - `id` (uuid, primary key)
      - `contribution_id` (uuid, foreign key to contributions)
      - `file_path` (text, storage path)
      - `file_name` (text, original filename)
      - `file_size` (bigint, size in bytes)
      - `capture_date` (timestamptz, from EXIF)
      - `camera_make` (text, from EXIF)
      - `camera_model` (text, from EXIF)
      - `latitude` (numeric, from EXIF GPS)
      - `longitude` (numeric, from EXIF GPS)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Allow public read access to completed contributions
    - Allow anyone to insert contributions (guest uploads)
*/

-- Create contributions table
CREATE TABLE IF NOT EXISTS contributions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  site_name text,
  description text,
  country text NOT NULL,
  city_region text,
  subject_type text NOT NULL,
  latitude numeric,
  longitude numeric,
  location_name text,
  photo_count integer DEFAULT 0,
  capture_date date,
  status text DEFAULT 'uploaded' NOT NULL,
  contributor_email text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create photos table
CREATE TABLE IF NOT EXISTS photos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  contribution_id uuid NOT NULL REFERENCES contributions(id) ON DELETE CASCADE,
  file_path text NOT NULL,
  file_name text NOT NULL,
  file_size bigint NOT NULL,
  capture_date timestamptz,
  camera_make text,
  camera_model text,
  latitude numeric,
  longitude numeric,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contributions ENABLE ROW LEVEL SECURITY;
ALTER TABLE photos ENABLE ROW LEVEL SECURITY;

-- RLS Policies for contributions
CREATE POLICY "Anyone can view completed contributions"
  ON contributions
  FOR SELECT
  USING (status = 'completed' OR status = 'processing');

CREATE POLICY "Anyone can insert contributions"
  ON contributions
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update their recent contributions"
  ON contributions
  FOR UPDATE
  USING (created_at > now() - interval '24 hours');

-- RLS Policies for photos
CREATE POLICY "Anyone can view photos of completed contributions"
  ON photos
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM contributions
      WHERE contributions.id = photos.contribution_id
      AND (contributions.status = 'completed' OR contributions.status = 'processing')
    )
  );

CREATE POLICY "Anyone can insert photos"
  ON photos
  FOR INSERT
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_contributions_status ON contributions(status);
CREATE INDEX IF NOT EXISTS idx_contributions_country ON contributions(country);
CREATE INDEX IF NOT EXISTS idx_contributions_created_at ON contributions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_photos_contribution_id ON photos(contribution_id);