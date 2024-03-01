"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/navigation";
import TaskInput from "./TaskInput";
import TaskLevels from "./TaskLevels";
import { BackIcon } from "../icons/BackIcon";
import TaskDueDateTime from "./TaskDueDateTime";
import { ISubtask, ITag } from "../types/types";
import TaskItemAdder from "./TaskItemAdder";
import TaskItemList from "./TaskItemList";
import { useItems } from "../hooks/useItems";
import { AppDispatch } from "../../redux/store";
import { handleAddTask } from "../../redux/features/taskSlice";

export default function TaskForm({ label }: { label: string }) {
  const [value, setValue] = useState<string>("");
  const [priority, setPriority] = useState<number>(0);
  const [complexity, setComplexity] = useState<number>(0);
  const [dueDate, setDueDate] = useState<string>("");
  const [dueTime, setDueTime] = useState<string>("");
  const [taskNameError, setTaskNameError] = useState<string>("");
  const {
    items: subtasks,
    addItem: addSubtask,
    deleteItem: deleteSubtask,
    editItem: editSubtask,
  } = useItems<ISubtask>();
  const {
    items: tags,
    addItem: addTag,
    deleteItem: deleteTag,
    editItem: editTag,
  } = useItems<ITag>();

  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();

  const handleTaskSubmit = () => {
    if (!value.trim()) {
      setTaskNameError("Task name is required.");
      return;
    }
    setTaskNameError("");
    dispatch(
      handleAddTask({
        id: Math.random().toString(),
        value,
        priority,
        complexity,
        dueDate,
        dueTime,
        subtasks,
        tags,
      })
    );
    router.push("/");
  };

  const handlePriority = (level: number) => {
    setPriority(level);
  };

  const handleComplexity = (level: number) => {
    setComplexity(level);
  };

  const handleDueDate = (date: string) => {
    setDueDate(date);
  };

  const handleDueTime = (time: string) => {
    setDueTime(time);
  };

  return (
    <div className="mt-4 flex flex-col items-center">
      <div className="w-[275px] sm:w-[358px]">
        <div className="flex items-center gap-[43px] sm:gap-[73px]">
          <Link href="/">
            <button className="bg-white rounded-full p-1 border-none focus:outline-none focus:ring-0">
              <BackIcon />
            </button>
          </Link>
          <span className="text-lg font-normal sm:text-2xl leading-[29px]">
            {label}
          </span>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <TaskInput onValueChange={(value) => setValue(value)} value={value} />
        </div>

        {taskNameError && (
          <div className="mt-1 text-red-500">{taskNameError}</div>
        )}

        <div>
          <TaskLevels
            handlePriority={handlePriority}
            handleComplexity={handleComplexity}
            priority={priority}
            complexity={complexity}
          />
        </div>
        <div className="mt-4">
          <TaskDueDateTime
            dueDate={dueDate}
            dueTime={dueTime}
            handleDueDate={handleDueDate}
            handleDueTime={handleDueTime}
          />
        </div>
        <div className="mt-4">
          <TaskItemAdder onAdd={addSubtask} placeholder="Add new subtask" />
          {subtasks.map((subtask) => (
            <TaskItemList
              key={subtask.id}
              item={subtask}
              onDelete={deleteSubtask}
              onEdit={editSubtask}
            />
          ))}
        </div>

        <div className="mt-4">
          <TaskItemAdder onAdd={addTag} placeholder="Add new tag" />
          {tags.map((tag) => (
            <TaskItemList
              key={tag.id}
              item={tag}
              onDelete={deleteTag}
              onEdit={editTag}
            />
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <button
            className="bg-blue-500 text-white rounded-full flex gap-2 py-4 px-8 border-none focus:outline-none focus:ring-0"
            onClick={handleTaskSubmit}
          >
            Save task
          </button>
        </div>
      </div>
    </div>
  );
}
