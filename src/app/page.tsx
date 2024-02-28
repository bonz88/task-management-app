"use client";

import Image from "next/image";
import { useAppSelector } from "../redux/store";

export default function Home() {
  const tasks = useAppSelector((state) => state.task);
  console.log("tasks: ", tasks);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{tasks.value}</h1>
    </main>
  );
}
