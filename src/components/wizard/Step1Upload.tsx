import { useState, useRef } from 'react';
import { Upload, X, ImageIcon, AlertCircle } from 'lucide-react';
import { PhotoFile } from '../../types';
import { extractPhotoMetadata } from '../../utils/exif';

interface Step1UploadProps {
  photos: PhotoFile[];
  onPhotosChange: (photos: PhotoFile[]) => void;
  onNext: () => void;
}

export default function Step1Upload({ photos, onPhotosChange, onNext }: Step1UploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files).filter(file =>
      file.type.startsWith('image/')
    );

    await processFiles(files);
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      await processFiles(files);
    }
  };

  const processFiles = async (files: File[]) => {
    const newPhotos: PhotoFile[] = await Promise.all(
      files.map(async (file) => {
        const metadata = await extractPhotoMetadata(file);
        return {
          id: Math.random().toString(36).substr(2, 9),
          file,
          preview: URL.createObjectURL(file),
          metadata
        };
      })
    );

    onPhotosChange([...photos, ...newPhotos]);
  };

  const removePhoto = (id: string) => {
    onPhotosChange(photos.filter(p => p.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Your Photos</h2>
        <p className="text-gray-600">
          Add photos of the historical site you visited. The more angles, the better the reconstruction.
        </p>
      </div>

      {/* Recommendations Panel */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">Photo Tips for Best Results</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Take 30-80 photos from different angles</li>
              <li>• Walk around the subject in a circle</li>
              <li>• Avoid blurry or low-light shots</li>
              <li>• Include overlapping views of the same features</li>
              <li>• Supported formats: JPG, PNG, HEIC</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Upload Area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
          isDragging
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 bg-white hover:border-gray-400'
        }`}
      >
        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-lg font-medium text-gray-900 mb-2">
          Drop photos here or click to browse
        </p>
        <p className="text-sm text-gray-500 mb-4">
          JPG, PNG, or HEIC files
        </p>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Browse Files
        </button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      {/* Photo Grid */}
      {photos.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Uploaded Photos ({photos.length})
            </h3>
            <button
              onClick={() => onPhotosChange([])}
              className="text-sm text-red-600 hover:text-red-700 font-medium"
            >
              Remove All
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div key={photo.id} className="relative group">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={photo.preview}
                    alt="Upload preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={() => removePhoto(photo.id)}
                  className="absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700"
                >
                  <X className="w-4 h-4" />
                </button>
                {photo.metadata?.captureDate && (
                  <div className="mt-1 text-xs text-gray-500 truncate">
                    {new Date(photo.metadata.captureDate).toLocaleDateString()}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Next Button */}
      <div className="mt-8 flex justify-end">
        <button
          onClick={onNext}
          disabled={photos.length === 0}
          className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
            photos.length === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
