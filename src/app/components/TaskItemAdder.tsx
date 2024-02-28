import React, { useState } from "react";
import { IItem } from "../types/types";
import { PlusIcon } from "../icons/PlusIcon";

type TaskItemAdderProps<T> = {
  onAdd: (value: string) => void;
  placeholder: string;
};

function TaskItemAdder<T extends IItem>({
  onAdd,
  placeholder,
}: TaskItemAdderProps<T>) {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd(value);
    setValue("");
  };

  return (
    <div className="flex flex-col gap-1">
      <span className="text-lg">{placeholder}</span>
      <div className="relative">
        <form onSubmit={handleSubmit}>
          <input
            className="w-full h-10 rounded-full border-0 outline-none p-4"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button
            type="submit"
            className="absolute mx-4 my-2 right-0 rounded-full bg-blue-200 hover:bg-blue-300 border-none focus:outline-none focus:ring-0"
          >
            <PlusIcon className="h-6 w-6 text-gray-600" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskItemAdder;
