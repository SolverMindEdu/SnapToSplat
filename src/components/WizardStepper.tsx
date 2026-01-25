import { Check } from 'lucide-react';

interface WizardStepperProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

export default function WizardStepper({ currentStep, totalSteps, steps }: WizardStepperProps) {
  return (
    <div className="w-full py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;

            return (
              <div key={stepNumber} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all transform ${
                      isCompleted
                        ? 'bg-amber-600 text-white scale-110'
                        : isCurrent
                        ? 'bg-amber-600 text-white ring-4 ring-amber-100 scale-110'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {isCompleted ? <Check className="w-5 h-5 animate-scale-in" /> : stepNumber}
                  </div>
                  <p
                    className={`mt-2 text-xs sm:text-sm font-medium transition-all ${
                      isCurrent ? 'text-amber-600 font-semibold' : 'text-gray-500'
                    }`}
                  >
                    {step}
                  </p>
                </div>
                {stepNumber < totalSteps && (
                  <div
                    className={`flex-1 h-1 mx-2 transition-all duration-500 ${
                      isCompleted ? 'bg-amber-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
