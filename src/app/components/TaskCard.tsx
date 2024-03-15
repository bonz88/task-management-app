import PriorityComplexityDisplay from "./PriorityComplexityDisplay";
import { ITask } from "../types/types";
import { CalendarIcon } from "../icons/CalendarIcon";

type TaskCardProps = {
  task: ITask;
};

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div
      className={`mt-6 rounded-xl flex justify-between py-4 px-2 ${
        task.isCompleted ? "bg-[rgba(13, 153, 255, 0.1)]" : "bg-white"
      }`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <span className="w-4 h-4 rounded-full bg-black" />
          <span className="text-base">{task.value}</span>
        </div>
        <div className="flex gap-2 items-center">
          <CalendarIcon />
          <span className="text-sm text-gray-600">Due Date: </span>
          <span className="text-sm">
            {task.dueDate ? task.dueDate : "No date"},{" "}
            {task.dueTime ? task.dueTime : "No time"}
          </span>
        </div>
        <PriorityComplexityDisplay priority={task.priority} />
        <PriorityComplexityDisplay complexity={task.complexity} />
        {task.tags.length > 0 && (
          <div className="mt-1 flex gap-2">
            {task.tags.map((tag) => (
              <span key={tag.id} className="text-xs bg-blue-100 p-1 rounded-lg">
                {tag.value}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
