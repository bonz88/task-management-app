type TaskInputProps = {
  onValueChange: (value: string) => void;
  value: string;
};

export default function TaskInput({ onValueChange, value }: TaskInputProps) {
  return (
    <div className="flex flex-col gap-[7px]">
      <span className="text-lg">Task Name</span>
      <input
        onChange={(e) => onValueChange(e.target.value)}
        className="w-[398px] h-10 p-4 rounded-full border-none focus:outline-none focus:ring-0"
        value={value}
      />
    </div>
  );
}
