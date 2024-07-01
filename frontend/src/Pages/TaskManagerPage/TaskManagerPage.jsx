// src/Pages/TaskManagerPage/TaskManagerPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from '../../Components/TaskForm/TaskForm';
import TaskCarousel from '../../Components/TaskCarousel/TaskCarousel';
import './TaskManagerPage.css'; // Example CSS import (optional)

const TaskManagerPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleCreateTask = async (newTask) => {
    try {
      const response = await axios.post('http://localhost:3000/tasks', newTask);
      setTasks(prevTasks => [...prevTasks, response.data]);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${taskId}`);
      setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="task-manager-page">
      <h1>Task Manager</h1>
      <TaskForm onCreateTask={handleCreateTask} />
      <TaskCarousel tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default TaskManagerPage;
