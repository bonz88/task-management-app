"use client";

import { useAppSelector } from "../redux/store";

export default function Home() {
  const tasks = useAppSelector((state) => state.task.tasks);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {tasks.map((task) => (
        <div key={task.value}>
          <h1>{task.value}</h1>
          <h1>{task.priority}</h1>
          <h1>{task.complexity}</h1>
          <h1>{task.dueDate}</h1>
          <h1>{task.dueTime}</h1>
          {task.subtasks.map((subtask) => (
            <div key={subtask.id}>
              <h1>{subtask.value}</h1>
              <h1>Completed: {subtask.isCompleted}</h1>
            </div>
          ))}
          {task.tags.map((tag) => (
            <h1 key={tag.id}>{tag.value}</h1>
          ))}
        </div>
      ))}
    </main>
  );
}
