// src/Components/TaskForm/TaskForm.jsx
import React, { useState } from 'react';
import './TaskForm.css'; // Example CSS import (optional)

interface TaskFormProps {
  onCreateTask: (task: { description: string; date: string }) => void;
}



const TaskForm: React.FC<TaskFormProps> = ({ onCreateTask }) => {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateTask({ description, date });
    setDescription('');
    setDate('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
