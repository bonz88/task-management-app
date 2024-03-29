const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const levelsCount = levels.length;

type LevelSelectorProps = {
  label: string;
  onLevelChange: (level: number) => void;
  priority?: number;
  complexity?: number;
};
export default function LevelSelector({
  label,
  onLevelChange,
  priority,
  complexity,
}: LevelSelectorProps) {
  return (
    <div className="flex flex-col gap-[6px] w-full">
      <span className="text-sm sm:text-lg">{label}</span>
      <span className="flex justify-between">
        {levels.map((level) => (
          <button
            onClick={() => onLevelChange(level)}
            className={`text-sm rounded-full size-6 sm:size-[30px] border-none focus:outline-none focus:ring-0 ${
              priority === level || complexity === level
                ? "bg-blue-500 text-white"
                : "bg-blue-100"
            }`}
            key={level}
          >
            {level}
          </button>
        ))}
      </span>
    </div>
  );
}
