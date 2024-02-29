import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISubtask, ITag } from "../../app/types/types";

type ITask = {
  id: string;
  value: string;
  priority: number;
  complexity: number;
  dueDate: string;
  dueTime: string;
  subtasks: ISubtask[];
  tags: ITag[];
};

type InitialState = {
  tasks: ITask[];
};

const initialState = {
  tasks: [],
} as InitialState;

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    handleAddTask: (state, action: PayloadAction<ITask>) => {
      state.tasks = [...state.tasks, action.payload];
    },
  },
});

export const { handleAddTask } = taskSlice.actions;
export default taskSlice.reducer;
