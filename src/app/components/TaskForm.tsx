"use client";
import { useState } from "react";
import Link from "next/link";
import TaskInput from "./TaskInput";
import TaskLevels from "./TaskLevels";
import { BackIcon } from "../icons/BackIcon";
import TaskDueDateTime from "./TaskDueDateTime";

export default function TaskForm({ label }: { label: string }) {
  const [value, setValue] = useState<string>("");
  const [priority, setPriority] = useState<number>(0);
  const [complexity, setComplexity] = useState<number>(0);
  const [dueDate, setDueDate] = useState<string>("");
  const [dueTime, setDueTime] = useState<string>("");
  const [taskNameError, setTaskNameError] = useState<string>("");

  const handlePriority = (level: number) => {
    setPriority(level);
  };

  const handleComplexity = (level: number) => {
    setComplexity(level);
  };

  const handleDueDate = (date: string) => {
    console.log(date);
    setDueDate(date);
  };

  const handleDueTime = (time: string) => {
    console.log(time);
    setDueTime(time);
  };

  console.log("priority: ", priority);
  console.log("complexity", complexity);
  return (
    <div className="mt-16 flex flex-col items-center">
      <div className="w-[398px]">
        <div className="flex items-center gap-[73px]">
          <Link href="/">
            <button className="bg-white rounded-full p-1 border-none focus:outline-none focus:ring-0">
              <BackIcon />
            </button>
          </Link>
          <span className="text-2xl font-medium leading-[29px]">{label}</span>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <TaskInput onValueChange={(value) => setValue(value)} value={value} />
        </div>
        <div className="mt-1">
          {taskNameError && <div className="text-red-500">{taskNameError}</div>}
        </div>
        <div className="mt-1">
          <TaskLevels
            handlePriority={handlePriority}
            handleComplexity={handleComplexity}
            priority={priority}
            complexity={complexity}
          />
        </div>
        <div className="mt-[30px]">
          <TaskDueDateTime
            dueDate={dueDate}
            dueTime={dueTime}
            handleDueDate={handleDueDate}
            handleDueTime={handleDueTime}
          />
        </div>
      </div>
    </div>
  );
}
