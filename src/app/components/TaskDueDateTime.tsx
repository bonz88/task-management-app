type TaskDueDateTimeProps = {
  dueDate: string;
  dueTime: string;
  handleDueDate: (date: string) => void;
  handleDueTime: (time: string) => void;
};
export default function TaskDueDateTime({
  dueTime,
  dueDate,
  handleDueDate,
  handleDueTime,
}: TaskDueDateTimeProps) {
  return (
    <div className="flex gap-2">
      <div className="w-1/2 flex flex-col gap-1">
        <span className="text-sm sm:text-lg">Select Due Date</span>
        <input
          className="h-10 rounded-full border-0 outline-none p-4"
          onChange={(e) => handleDueDate(e.target.value)}
          value={dueDate}
          type="date"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-1">
        <span className="text-sm sm:text-lg">Select Due Time</span>
        <input
          className="h-10 rounded-full border-0 outline-none p-4"
          onChange={(e) => handleDueTime(e.target.value)}
          value={dueTime}
          type="time"
        />
      </div>
    </div>
  );
}
