import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  description: string;
  date: string;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    }
  },
});

export const { addTask, deleteTask, setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
