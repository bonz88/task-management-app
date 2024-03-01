import LevelSelector from "./LevelSelector";

type TaskLevelsProps = {
  handlePriority: (value: number) => void;
  handleComplexity: (value: number) => void;
  priority: number;
  complexity: number;
};

export default function TaskLevels({
  handlePriority,
  handleComplexity,
  priority,
  complexity,
}: TaskLevelsProps) {
  return (
    <div className="flex flex-col">
      <div className="mt-4">
        <LevelSelector
          label="Select priority level"
          onLevelChange={(level) => handlePriority(level)}
          priority={priority}
        />
      </div>
      <div className="mt-4">
        <LevelSelector
          label="Select complexity level"
          onLevelChange={(level) => handleComplexity(level)}
          complexity={complexity}
        />
      </div>
    </div>
  );
}
