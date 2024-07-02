// src/hooks/useTaskManager.ts
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../store/store';
import { addTask, deleteTask, setTasks } from '../reducers/tasksSlice';
import { groupTasksByDate } from '../utils/dateUtils';

export const useTaskManager = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/tasks');
        dispatch(setTasks(response.data));
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [dispatch]);

  const handleAddTask = async (task: { description: string; date: string }) => {
    try {
      const response = await axios.post('http://localhost:3000/tasks', task);
      dispatch(addTask(response.data));
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleDeleteTask = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${id}`);
      dispatch(deleteTask(id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const groupedTasks = groupTasksByDate(tasks);
  

  return { tasks, groupedTasks, handleAddTask, handleDeleteTask };
};
