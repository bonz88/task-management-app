import { useState } from "react";
import { IItem } from "../types/types";

export function useItems<T extends IItem>() {
  const [items, setItems] = useState<T[]>([]);

  const addItem = (value: string) => {
    const newItem: T = {
      id: Math.random().toString(),
      value,
      isCompleted: false,
    } as T;
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const deleteItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const editItem = (id: string, value: string) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, value } : item))
    );
  };

  return { items, addItem, deleteItem, editItem };
}
