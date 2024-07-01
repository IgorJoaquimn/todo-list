import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from '../reducers/tasksSlice';

const store = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;