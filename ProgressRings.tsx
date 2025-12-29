import { Star } from 'lucide-react';

export function ProgressRings() {
  const steps = [
    { label: "Start", completed: true },
    { label: "Communication", completed: true },
    { label: "Delegation", completed: false },
    { label: "Confidence", completed: false },
    { label: "Mastery", completed: false, isFinal: true },
  ];

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg">
      <h3 className="mb-6">Leadership Journey</h3>

      <div className="flex items-center gap-8">
        {/* Vertical Progress Bar */}
        <div className="flex flex-col items-center gap-2">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center">
              {/* Circle or Star */}
              {step.isFinal ? (
                <Star
                  className={`w-7 h-7 ${
                    step.completed ? 'fill-blue-500 text-blue-500' : 'fill-gray-300 text-gray-300'
                  }`}
                />
              ) : (
                <div
                  className={`w-6 h-6 rounded-full ${
                    step.completed
                      ? 'bg-blue-500'
                      : 'bg-white border-2 border-gray-300'
                  }`}
                />
              )}

              {/* Line (only if NOT the last item) */}
              {i < steps.length - 1 && (
                <div
                  className={`w-0.5 h-12 ${
                    steps[i].completed ? 'bg-blue-400' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Labels */}
        <div className="flex flex-col gap-2">
          {steps.map(({ label }, i) => (
            <div key={label} className={`flex items-center ${i < steps.length - 1 ? 'h-[72px]' : 'h-[28px]'}`}>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}