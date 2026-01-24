import exifr from 'exifr';
import { PhotoMetadata } from '../types';

export async function extractPhotoMetadata(file: File): Promise<PhotoMetadata> {
  try {
    const data = await exifr.parse(file, {
      gps: true,
      pick: ['Make', 'Model', 'DateTimeOriginal', 'CreateDate', 'latitude', 'longitude']
    });

    if (!data) {
      return {};
    }

    return {
      captureDate: data.DateTimeOriginal || data.CreateDate,
      cameraMake: data.Make,
      cameraModel: data.Model,
      latitude: data.latitude,
      longitude: data.longitude
    };
  } catch (error) {
    console.error('Error extracting EXIF data:', error);
    return {};
  }
}
