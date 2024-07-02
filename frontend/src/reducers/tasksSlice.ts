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
      // Find the index where the new task should be inserted
      const insertIndex = state.tasks.findIndex(task => task.date > action.payload.date);
      if (insertIndex === -1) {
        // If no task found with a later date, push to the end
        state.tasks.push(action.payload);
      } else {
        // Otherwise, insert at the found index to maintain sorted order
        state.tasks.splice(insertIndex, 0, action.payload);
      }
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
