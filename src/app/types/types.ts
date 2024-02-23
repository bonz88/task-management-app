export type ITask = {
  id: string;
  value: string;
  isCompleted: boolean;
  priority: number;
  complexity: number;
  dueDate: string;
  dueTime: string;
  subtasks: ISubtask[];
  tags: ITag[];
};

export type ISubtask = {
  id: string;
  value: string;
  isCompleted: boolean;
};

export type ITag = {
  id: string;
  value: string;
};
