"use client";
import { useState } from "react";
import { ISubtask } from "../types/types";
import { DeleteIcon } from "../icons/DeleteIcon";

type TaskSubtasksListProps = {
  subtask: ISubtask;
  handleDeleteSubtask: (id: string) => void;
  handleEditSubtask: (value: string, id: string) => void;
};

export default function TaskSubtasksList({
  subtask,
  handleDeleteSubtask,
  handleEditSubtask,
}: TaskSubtasksListProps) {
  const [editedValue, setEditedValue] = useState(subtask.value);
  const handleSubmitEdit = (
    e: React.FormEvent<HTMLFormElement>,
    id: string
  ) => {
    e.preventDefault();
    handleEditSubtask(editedValue, id);
  };

  const handleBlur = () => {
    handleEditSubtask(editedValue, subtask.id);
  };
  return (
    <div className="relative rounded-full shadow-sm mt-1">
      <form onSubmit={(e) => handleSubmitEdit(e, subtask.id)}>
        <input
          className="w-full pl-4 pr-12 py-2 rounded-full focus:outline-none"
          onChange={(e) => setEditedValue(e.target.value)}
          value={editedValue}
          onBlur={handleBlur}
        />
        <button
          type="button"
          onClick={() => handleDeleteSubtask(subtask.id)}
          className="absolute mx-4 my-2 right-0 rounded-full bg-pink-200 hover:bg-pink-300 border-none focus:outline-none focus:ring-0"
        >
          <DeleteIcon className="h-6 w-6 text-gray-600" />
        </button>
      </form>
    </div>
  );
}
