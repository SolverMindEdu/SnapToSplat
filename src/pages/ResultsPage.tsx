import { CheckCircle, Share2, Eye, Upload, Clock, Users, Database } from 'lucide-react';
import { ContributionFormData } from '../types';

interface ResultsPageProps {
  contributionId: string;
  formData: ContributionFormData;
  photoCount: number;
  onNavigate: (page: string) => void;
}

export default function ResultsPage({
  contributionId,
  formData,
  photoCount,
  onNavigate
}: ResultsPageProps) {
  const handleShare = () => {
    const url = `${window.location.origin}/contribution/${contributionId}`;
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Site Documentation Submitted!
          </h1>
          <p className="text-lg text-gray-600">
            Thank you for contributing to the archaeological record of our shared heritage.
          </p>
        </div>

        {/* Submission Summary Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-amber-200 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">Documentation Summary</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Site Name</p>
                <p className="font-semibold text-gray-900">
                  {formData.siteName || 'Not specified'}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Location</p>
                <p className="font-semibold text-gray-900">
                  {formData.cityRegion
                    ? `${formData.cityRegion}, ${formData.country}`
                    : formData.country}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Subject Type</p>
                <p className="font-semibold text-gray-900 capitalize">
                  {formData.subjectType.replace('_', ' ')}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Photos Uploaded</p>
                <p className="font-semibold text-gray-900">{photoCount} images</p>
              </div>
              {formData.captureDate && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Capture Date</p>
                  <p className="font-semibold text-gray-900">
                    {new Date(formData.captureDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              )}
              <div>
                <p className="text-sm text-gray-500 mb-1">Contribution ID</p>
                <p className="font-mono text-sm text-gray-700">{contributionId}</p>
              </div>
            </div>
            {formData.description && (
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-1">Description</p>
                <p className="text-gray-900">{formData.description}</p>
              </div>
            )}
          </div>
        </div>

        {/* Training Status Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">Model Training Status</h2>
          </div>
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-amber-600 animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Creating Your 3D Splat
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your site documentation has been uploaded successfully. Our team will process your photos using Gaussian Splatting to create a permanent 3D archaeological record. You'll be notified when your splat is ready to view.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <button
            onClick={() => onNavigate('explore')}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all"
          >
            <Eye className="w-5 h-5" />
            <span>View Archive</span>
          </button>
          <button
            onClick={() => onNavigate('contribute')}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-white text-amber-700 font-semibold rounded-lg border-2 border-amber-600 hover:bg-amber-50 transition-colors"
          >
            <Upload className="w-5 h-5" />
            <span>Document Another Site</span>
          </button>
          <button
            onClick={handleShare}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <Share2 className="w-5 h-5" />
            <span>Share Link</span>
          </button>
        </div>

        {/* What Happens Next Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-amber-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Processing queue
                </h3>
                <p className="text-gray-600">
                  Your documentation enters our processing pipeline where photos are prepared for 3D reconstruction.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Splat generation
                </h3>
                <p className="text-gray-600">
                  Using Gaussian Splatting, we create a high-fidelity 3D representation preserving textures and spatial relationships.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Archaeological record
                </h3>
                <p className="text-gray-600">
                  Your splat joins our permanent archive, accessible to archaeologists, researchers, and heritage enthusiasts worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
