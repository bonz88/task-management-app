"use client";
import Link from "next/link";
import { BackIcon } from "../icons/BackIcon";
import TaskInput from "./TaskInput";
import { useState } from "react";

export default function TaskForm({ label }: { label: string }) {
  const [value, setValue] = useState<string>("");
  console.log(value);
  return (
    <div className="mt-16 flex flex-col items-center">
      <div className="w-1/4">
        <div className="flex items-center gap-6">
          <Link href="/">
            <button className="bg-white rounded-full p-1 border-none focus:outline-none focus:ring-0">
              <BackIcon />
            </button>
          </Link>
          <span className="text-2xl">{label}</span>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <TaskInput onValueChange={(value) => setValue(value)} value={value} />
        </div>
      </div>
    </div>
  );
}
