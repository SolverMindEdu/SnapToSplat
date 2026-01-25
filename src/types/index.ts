export interface PhotoFile {
  id: string;
  file: File;
  preview: string;
  metadata?: PhotoMetadata;
  mediaType?: 'image' | 'video';
  mimeType?: string;
}

export interface PhotoMetadata {
  captureDate?: Date;
  cameraMake?: string;
  cameraModel?: string;
  latitude?: number;
  longitude?: number;
}

export interface ContributionFormData {
  siteName?: string;
  description?: string;
  country: string;
  cityRegion?: string;
  subjectType: string;
  captureDate?: Date;
  contributorEmail?: string;
}

export interface LocationCandidate {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  confidence: number;
}

export interface Contribution {
  id: string;
  site_name?: string;
  description?: string;
  country: string;
  city_region?: string;
  subject_type: string;
  latitude?: number;
  longitude?: number;
  location_name?: string;
  photo_count: number;
  capture_date?: string;
  status: 'uploaded' | 'processing' | 'completed';
  contributor_email?: string;
  model_preview_url?: string;
  created_at: string;
  updated_at: string;
}
