export default function ProgressBar({
  currentStep = 1,
  totalSteps = 5
}) {
  const progress =
    (currentStep / totalSteps) * 100;

  return (
    <div className="w-full mb-6">
      <div className="flex justify-between text-sm mb-2">
        <span>
          Step {currentStep} of {totalSteps}
        </span>

        <span>
          {Math.round(progress)}%
        </span>
      </div>

      <div className="w-full h-2 rounded-full bg-slate-800">
        <div
          style={{ width: `${progress}%` }}
          className="
          h-2
          rounded-full
          bg-orange-500
          transition-all
          duration-500
          "
        />
      </div>
    </div>
  );
}
