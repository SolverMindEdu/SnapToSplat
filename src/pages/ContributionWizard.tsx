import { useState } from 'react';
import WizardStepper from '../components/WizardStepper';
import Step1Upload from '../components/wizard/Step1Upload';
import Step2Metadata from '../components/wizard/Step2Metadata';
import Step4Processing from '../components/wizard/Step4Processing';
import { PhotoFile, ContributionFormData } from '../types';
import { supabase } from '../lib/supabase';

interface ContributionWizardProps {
  onComplete: (contributionId: string, formData: ContributionFormData, photoCount: number) => void;
}

const STEPS = ['Upload', 'Details', 'Processing'];

export default function ContributionWizard({ onComplete }: ContributionWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [photos, setPhotos] = useState<PhotoFile[]>([]);
  const [formData, setFormData] = useState<ContributionFormData>({
    country: '',
    subjectType: ''
  });
  const [consent, setConsent] = useState(false);

  const handleStep1Next = () => {
    setCurrentStep(2);
  };

  const handleStep2Next = (updatedFormData: ContributionFormData) => {
    setFormData(updatedFormData);
    setCurrentStep(3);
    saveContribution(updatedFormData);
  };

  const handleStep2Back = () => {
    setCurrentStep(1);
  };

  const saveContribution = async (dataToSave: ContributionFormData) => {
    try {
      const photosWithGPS = photos.filter(
        p => p.metadata?.latitude && p.metadata?.longitude
      );

      let latitude = null;
      let longitude = null;
      let locationName = dataToSave.siteName || `${dataToSave.subjectType} in ${dataToSave.country}`;

      if (photosWithGPS.length > 0) {
        latitude = photosWithGPS.reduce((sum, p) => sum + (p.metadata?.latitude || 0), 0) / photosWithGPS.length;
        longitude = photosWithGPS.reduce((sum, p) => sum + (p.metadata?.longitude || 0), 0) / photosWithGPS.length;
      }

      const { data: contribution, error: contributionError } = await supabase
        .from('contributions')
        .insert({
          site_name: dataToSave.siteName,
          description: dataToSave.description,
          country: dataToSave.country,
          city_region: dataToSave.cityRegion,
          subject_type: dataToSave.subjectType,
          latitude,
          longitude,
          location_name: locationName,
          photo_count: photos.length,
          capture_date: dataToSave.captureDate?.toISOString().split('T')[0],
          contributor_email: dataToSave.contributorEmail,
          status: 'processing'
        })
        .select()
        .maybeSingle();

      if (contributionError) throw contributionError;

      if (contribution) {
        const photoInserts = photos.map(photo => ({
          contribution_id: contribution.id,
          file_path: `mock-path/${photo.file.name}`,
          file_name: photo.file.name,
          file_size: photo.file.size,
          capture_date: photo.metadata?.captureDate?.toISOString(),
          camera_make: photo.metadata?.cameraMake,
          camera_model: photo.metadata?.cameraModel,
          latitude: photo.metadata?.latitude,
          longitude: photo.metadata?.longitude
        }));

        const { error: photosError } = await supabase
          .from('photos')
          .insert(photoInserts);

        if (photosError) throw photosError;
      }
    } catch (error) {
      console.error('Error saving contribution:', error);
    }
  };

  const handleProcessingComplete = (contributionId: string) => {
    onComplete(contributionId, formData, photos.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white">
      {/* Stepper */}
      {currentStep < 3 && (
        <div className="border-b border-gray-200 bg-white">
          <WizardStepper currentStep={currentStep} totalSteps={3} steps={STEPS} />
        </div>
      )}

      {/* Step Content */}
      <div className="pb-12">
        {currentStep === 1 && (
          <Step1Upload
            photos={photos}
            onPhotosChange={setPhotos}
            onNext={handleStep1Next}
          />
        )}

        {currentStep === 2 && (
          <>
            <Step2Metadata
              photos={photos}
              formData={formData}
              onFormDataChange={setFormData}
              onNext={handleStep2Next}
              onBack={handleStep2Back}
            />

            {/* Privacy Consent */}
            <div className="max-w-2xl mx-auto px-4 mt-6">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 text-amber-600 rounded focus:ring-2 focus:ring-amber-500"
                />
                <span className="text-sm text-gray-700">
                  I own these photos and allow them to be used for archaeological preservation and research purposes.
                </span>
              </label>
            </div>
          </>
        )}

        {currentStep === 3 && (
          <Step4Processing onComplete={handleProcessingComplete} />
        )}
      </div>
    </div>
  );
}
