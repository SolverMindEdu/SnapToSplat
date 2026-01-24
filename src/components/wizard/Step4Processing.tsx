import { useState, useEffect } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';

interface Step4ProcessingProps {
  onComplete: (contributionId: string) => void;
}

const PROCESSING_STEPS = [
  { message: 'Uploading photos to server...', duration: 5000 },
  { message: 'Verifying image quality...', duration: 3000 },
  { message: 'Extracting metadata...', duration: 2000 },
  { message: 'Saving to database...', duration: 3000 },
  { message: 'Queueing for 3D reconstruction...', duration: 2000 }
];

export default function Step4Processing({ onComplete }: Step4ProcessingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let stepTimeout: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    const totalDuration = PROCESSING_STEPS.reduce((sum, step) => sum + step.duration, 0);
    const stepDurations = PROCESSING_STEPS.map(step => step.duration);
    let elapsedTime = 0;

    const startStep = (index: number) => {
      if (index >= PROCESSING_STEPS.length) {
        setTimeout(() => {
          onComplete('mock-contribution-id');
        }, 500);
        return;
      }

      setCurrentStep(index);
      const stepDuration = stepDurations[index];

      const stepStartTime = elapsedTime;
      progressInterval = setInterval(() => {
        elapsedTime += 50;
        const newProgress = Math.min((elapsedTime / totalDuration) * 100, 100);
        setProgress(newProgress);
      }, 50);

      stepTimeout = setTimeout(() => {
        clearInterval(progressInterval);
        startStep(index + 1);
      }, stepDuration);
    };

    startStep(0);

    return () => {
      clearTimeout(stepTimeout);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
            <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Processing Your Contribution
          </h2>
          <p className="text-gray-600">
            Please wait while we process your photos. This may take a moment.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              {PROCESSING_STEPS[currentStep]?.message}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-300 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Status Messages */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-2 max-h-48 overflow-y-auto">
          {PROCESSING_STEPS.slice(0, currentStep + 1).map((step, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 text-sm ${
                index === currentStep ? 'text-blue-600' : 'text-gray-500'
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full flex-shrink-0 ${
                  index < currentStep
                    ? 'bg-green-500'
                    : index === currentStep
                    ? 'bg-blue-600 animate-pulse'
                    : 'bg-gray-300'
                }`}
              />
              <span>{step.message}</span>
            </div>
          ))}
        </div>

        {/* Warning Note */}
        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-amber-900">
              Do not close this tab. Your upload is in progress and will complete shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
