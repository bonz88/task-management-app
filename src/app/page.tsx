"use client";
import Link from "next/link";
import { useAppSelector } from "../redux/store";
import { SearchIcon } from "./icons/SearchIcon";
import { PlusIcon } from "./icons/PlusIcon";
import TaskCard from "./components/TaskCard";

export default function Home() {
  const tasks = useAppSelector((state) => state.task.tasks);

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
        <div className="w-full flex flex-col">
          {tasks.map((task) => (
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
