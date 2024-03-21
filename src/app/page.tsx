"use client";
import Link from "next/link";
import { useState } from "react";
import { useAppSelector } from "../redux/store";
import { SearchIcon } from "./icons/SearchIcon";
import { PlusIcon } from "./icons/PlusIcon";
import TaskCard from "./components/TaskCard";
import TaskSort from "./components/TaskSort";

export default function Home() {
  const tasks = useAppSelector((state) => state.task.tasks);
  const [sortOption, setSortOption] = useState("");

  const handleSort = (option: string) => {
    setSortOption(option);
  };

  const tasksCopy = [...tasks];

  if (sortOption === "Ascending Complexity") {
    tasksCopy.sort((a, b) => a.complexity - b.complexity);
  }

  if (sortOption === "Descending Complexity") {
    tasksCopy.sort((a, b) => b.complexity - a.complexity);
  }

  if (sortOption === "Ascending Priority") {
    tasksCopy.sort((a, b) => a.priority - b.priority);
  }

  if (sortOption === "Descending Priority") {
    tasksCopy.sort((a, b) => b.priority - a.priority);
  }

  if (sortOption === "Ascending Date") {
    tasksCopy.sort((a, b) => {
      if (!a.dueDate && !b.dueDate) return 0;
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    });
  }

  if (sortOption === "Descending Date") {
    tasksCopy.sort((a, b) => {
      if (!a.dueDate && !b.dueDate) return 0;
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
    });
  }

  return (
    <div className="mt-4 flex flex-col items-center">
      <div className="w-[275px] sm:w-[358px]">
        <div className="relative">
          <input
            className="w-full h-14 flex items-center border-0 outline-none rounded-full py-3 pl-12 placeholder-gray-500"
            placeholder="Search..."
          />
          <SearchIcon className="absolute top-4 left-4" />
        </div>
        <div className="mt-4">
          <TaskSort handleSort={handleSort} />
        </div>
        <div className="w-full flex flex-col">
          {tasksCopy.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
      </div>
      <Link href="/task/add">
        <button className="bg-blue-500 rounded-full flex gap-2 mt-6 p-4 border-none focus:outline-none focus:ring-0">
          <PlusIcon />
          <span className="text-white">Add New Task</span>
        </button>
      </Link>
    </div>
  );
}
