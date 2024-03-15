import { PriorityIcon } from "../icons/PriorityIcon";
import { ComplexityIcon } from "../icons/ComplexityIcon";
import { levelsCount } from "./LevelSelector";

type PriorityComplexityDisplayProps = {
  priority?: number;
  complexity?: number;
};

export default function PriorityComplexityDisplay({
  priority,
  complexity,
}: PriorityComplexityDisplayProps) {
  const priorityComplexityDesc = (desc: number) => {
    if (desc < 4) return "Low";
    if (desc < 7) return "Medium";
    return "High";
  };
  return (
    <div className="flex gap-2">
      {priority ? <PriorityIcon /> : <ComplexityIcon />}
      <div className="flex gap-1">
        <span className="text-sm text-gray-600">
          {priority ? "Priority:" : "Complexity:"}{" "}
        </span>
        <span className="text-sm flex gap-1">
          <span className="text-sm">
            {priority && priorityComplexityDesc(priority)}
            {complexity && priorityComplexityDesc(complexity)}
          </span>
          <span className="text-sm">
            ({priority || complexity}/{levelsCount})
          </span>
        </span>
      </div>
    </div>
  );
}
