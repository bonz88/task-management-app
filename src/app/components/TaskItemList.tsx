import React, { useState } from "react";
import { IItem } from "../types/types";
import { DeleteIcon } from "../icons/DeleteIcon";

type TaskItemListProps<T extends IItem> = {
  item: T;
  onDelete: (id: string) => void;
  onEdit: (id: string, value: string) => void;
};

function TaskItemList<T extends IItem>({
  item,
  onDelete,
  onEdit,
}: TaskItemListProps<T>) {
  const [editedValue, setEditedValue] = useState(item.value);

  const handleBlur = () => {
    onEdit(item.id, editedValue);
  };

  return (
    <div className="relative rounded-full shadow-sm mt-1">
      <input
        className="w-full pl-4 pr-12 py-2 rounded-full focus:outline-none"
        onChange={(e) => setEditedValue(e.target.value)}
        value={editedValue}
        onBlur={handleBlur}
      />
      <button
        type="button"
        onClick={() => onDelete(item.id)}
        className="absolute mx-4 my-2 right-0 rounded-full bg-pink-200 hover:bg-pink-300 border-none focus:outline-none focus:ring-0"
      >
        <DeleteIcon className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );
}

export default TaskItemList;
