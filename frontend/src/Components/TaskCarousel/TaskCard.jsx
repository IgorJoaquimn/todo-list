// src/Components/TaskCarousel/TaskCard.jsx
import React from 'react';
import './TaskCard.css'; // Example CSS import (optional)

const TaskCard = ({ task, onDeleteTask }) => {
  const { id, description, date } = task;

  const handleDelete = () => {
    onDeleteTask(id);
  };

  return (
    <div className="task-card">
      <p>{description}</p>
      <p>{date}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskCard;
