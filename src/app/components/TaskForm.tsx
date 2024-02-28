"use client";
import { useState } from "react";
import Link from "next/link";
import TaskInput from "./TaskInput";
import TaskLevels from "./TaskLevels";
import { BackIcon } from "../icons/BackIcon";
import TaskDueDateTime from "./TaskDueDateTime";
import { ITask, ISubtask, ITag } from "../types/types";
import TaskSubtasks from "./TaskSubtasks";
import TaskSubtasksList from "./TaskSubtasksList";
import TaskTags from "./TaskTags";
import TaskTagsList from "./TaskTagsList";
import TaskItemAdder from "./TaskItemAdder";
import TaskItemList from "./TaskItemList";
import { useItems } from "../hooks/useItems";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { handleAddTask } from "../../redux/features/taskSlice";

export default function TaskForm({ label }: { label: string }) {
  const [value, setValue] = useState<string>("");
  const [priority, setPriority] = useState<number>(0);
  const [complexity, setComplexity] = useState<number>(0);
  const [dueDate, setDueDate] = useState<string>("");
  const [dueTime, setDueTime] = useState<string>("");
  //const [subtasks, setSubtasks] = useState<ISubtask[]>([]);
  //const [tags, setTags] = useState<ITag[]>([]);
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

  const handleTaskSubmit = () => {
    console.log("test save task");
    if (!value.trim()) {
      setTaskNameError("Task name is required.");
      return;
    }
    setTaskNameError("");
    dispatch(
      handleAddTask({
        value,
        priority,
        complexity,
        dueDate,
        dueTime,
        subtasks,
        tags,
      })
    );
  };

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

  /*   const handleSubtasks = (value: string) => {
    const subtask: ISubtask = {
      id: Math.random().toString(),
      value: value,
      isCompleted: false,
    };
    setSubtasks([...subtasks, subtask]);
  };

  const handleDeleteSubtask = (id: string) => {
    const newSubtask = subtasks.filter((subtask) => subtask.id !== id);
    setSubtasks(newSubtask);
  };

  const handleEditSubtask = (value: string, id: string) => {
    const newSubtask = subtasks.map((subtask) => {
      if (subtask.id === id) {
        return {
          ...subtask,
          value,
        };
      }
      return subtask;
    });
    setSubtasks(newSubtask);
  };

  const handleTags = (value: string) => {
    const tag: ITag = {
      id: Math.random().toString(),
      value: value,
    };
    setTags([...tags, tag]);
  };

  const handleDeleteTag = (id: string) => {
    const newTag = tags.filter((tag) => tag.id !== id);
    setTags(newTag);
  };

  const handleEditTag = (value: string, id: string) => {
    const newTag = tags.map((tag) => {
      if (tag.id === id) {
        return {
          ...tag,
          value,
        };
      }
      return tag;
    });
    setTags(newTag);
  }; */

  //console.log("subtasks: ", subtasks);
  //console.log("tags: ", tags);
  return (
    <div className="mt-16 flex flex-col items-center">
      <div className="w-[358px]">
        <div className="flex items-center gap-[73px]">
          <Link href="/">
            <button className="bg-white rounded-full p-1 border-none focus:outline-none focus:ring-0">
              <BackIcon />
            </button>
          </Link>
          <span className="text-2xl font-medium leading-[29px]">{label}</span>
        </div>
        <div className="mt-[30px] flex flex-col gap-1">
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
        {/*  <div className="mt-[30px]">
          <TaskSubtasks handleSubtasks={handleSubtasks} />
        </div> */}
        {/*  <div>
          {subtasks.map((subtask) => (
            <TaskSubtasksList
              key={subtask.id}
              subtask={subtask}
              handleDeleteSubtask={handleDeleteSubtask}
              handleEditSubtask={handleEditSubtask}
            />
          ))}
        </div> */}
        {/* <div className="mt-[30px]">
          <TaskTags handleTags={handleTags} />
        </div> */}
        {/* <div>
          {tags.map((tag) => (
            <TaskTagsList
              key={tag.id}
              tag={tag}
              handleDeleteTag={handleDeleteTag}
              handleEditTag={handleEditTag}
            />
          ))}
        </div> */}
        <div className="mt-[30px]">
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

        <div className="mt-[30px]">
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
        <div className="mt-4 flex justify-center">
          <button
            className="bg-blue-500 text-white rounded-full flex gap-2 my-6 py-4 px-8 border-none focus:outline-none focus:ring-0"
            onClick={handleTaskSubmit}
          >
            Save task
          </button>
        </div>
      </div>
    </div>
  );
}
