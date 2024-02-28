import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISubtask, ITag } from "../../app/types/types";
type InitialState = {
  value: string;
  priority: number;
  complexity: number;
  dueDate: string;
  dueTime: string;
  subtasks: ISubtask[];
  tags: ITag[];
};

const initialState = {
  value: "",
  priority: 0,
  complexity: 0,
  dueDate: "",
  dueTime: "",
  subtasks: [],
  tags: [],
} as InitialState;

type TaskUpdatePayload = {
  value: string;
  priority: number;
  complexity: number;
  dueDate: string;
  dueTime: string;
  subtasks: ISubtask[];
  tags: ITag[];
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    handleAddTask: (state, action: PayloadAction<TaskUpdatePayload>) => {
      const { value, priority, complexity, dueDate, dueTime, subtasks, tags } =
        action.payload;
      console.log("Saving task:", action.payload);
      state.value = value;
      state.priority = priority;
      state.complexity = complexity;
      state.dueDate = dueDate;
      state.dueTime = dueTime;
      state.subtasks = subtasks;
      state.tags = tags;
    },
  },
});

export const { handleAddTask } = taskSlice.actions;
export default taskSlice.reducer;
