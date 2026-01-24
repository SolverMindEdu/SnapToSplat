import { useState, useEffect } from 'react';
import { Info } from 'lucide-react';
import { PhotoFile, ContributionFormData } from '../../types';

interface Step2MetadataProps {
  photos: PhotoFile[];
  formData: ContributionFormData;
  onFormDataChange: (data: ContributionFormData) => void;
  onNext: () => void;
  onBack: () => void;
}

const SUBJECT_TYPES = [
  { value: 'ruin', label: 'Archaeological Ruin' },
  { value: 'statue', label: 'Statue or Monument' },
  { value: 'inscription', label: 'Inscription or Carving' },
  { value: 'temple', label: 'Temple or Religious Site' },
  { value: 'mural', label: 'Mural or Wall Art' },
  { value: 'artifact', label: 'Artifact' },
  { value: 'other', label: 'Other' }
];

export default function Step2Metadata({
  photos,
  formData,
  onFormDataChange,
  onNext,
  onBack
}: Step2MetadataProps) {
  const [localData, setLocalData] = useState<ContributionFormData>(formData);

  useEffect(() => {
    if (!localData.captureDate && photos.length > 0) {
      const photosWithDates = photos
        .filter(p => p.metadata?.captureDate)
        .sort((a, b) => {
          const dateA = a.metadata?.captureDate || new Date(0);
          const dateB = b.metadata?.captureDate || new Date(0);
          return new Date(dateB).getTime() - new Date(dateA).getTime();
        });

      if (photosWithDates.length > 0 && photosWithDates[0].metadata?.captureDate) {
        setLocalData({
          ...localData,
          captureDate: new Date(photosWithDates[0].metadata.captureDate)
        });
      }
    }
  }, [photos]);

  const handleChange = (field: keyof ContributionFormData, value: any) => {
    setLocalData({ ...localData, [field]: value });
  };

  const handleNext = () => {
    onFormDataChange(localData);
    onNext();
  };

  const isValid = localData.country && localData.subjectType;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell Us About Your Photos</h2>
        <p className="text-gray-600">
          We've extracted some information from your photos. Please review and complete the details.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">
        {/* Capture Date */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            When were these photos taken?
          </label>
          <input
            type="date"
            value={localData.captureDate ? localData.captureDate.toISOString().split('T')[0] : ''}
            onChange={(e) => handleChange('captureDate', new Date(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Subject Type */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            What did you photograph? <span className="text-red-500">*</span>
          </label>
          <select
            value={localData.subjectType || ''}
            onChange={(e) => handleChange('subjectType', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a type...</option>
            {SUBJECT_TYPES.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Country <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={localData.country || ''}
            onChange={(e) => handleChange('country', e.target.value)}
            placeholder="e.g., Italy"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* City/Region */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            City or Region
          </label>
          <input
            type="text"
            value={localData.cityRegion || ''}
            onChange={(e) => handleChange('cityRegion', e.target.value)}
            placeholder="e.g., Pompeii, Campania"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Site Name */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Site Name
          </label>
          <input
            type="text"
            value={localData.siteName || ''}
            onChange={(e) => handleChange('siteName', e.target.value)}
            placeholder="e.g., Temple of Apollo"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Description
          </label>
          <textarea
            value={localData.description || ''}
            onChange={(e) => handleChange('description', e.target.value)}
            placeholder="Add any additional details about the site..."
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Your Email (optional)
          </label>
          <input
            type="email"
            value={localData.contributorEmail || ''}
            onChange={(e) => handleChange('contributorEmail', e.target.value)}
            placeholder="Get updates about your contribution"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Privacy Note */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-900">
              We only use location data to correctly index the site. GPS coordinates from your photos help us match existing records.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={!isValid}
          className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
            !isValid
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
