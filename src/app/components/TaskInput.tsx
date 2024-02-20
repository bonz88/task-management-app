type TaskInputProps = {
  onValueChange: (value: string) => void;
  value: string;
};

export default function TaskInput({ onValueChange, value }: TaskInputProps) {
  return (
    <input
      onChange={(e) => onValueChange(e.target.value)}
      className="w-full h-10 p-4 rounded-full border-none focus:outline-none focus:ring-0"
      value={value}
    />
  );
}
