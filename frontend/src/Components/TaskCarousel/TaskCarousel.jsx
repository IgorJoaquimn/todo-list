// src/Components/TaskCarousel/TaskCarousel.jsx
import React from 'react';
import TaskCard from './TaskCard';
import './TaskCarousel.css'; // Example CSS import (optional)

const TaskCarousel = ({ tasks, onDeleteTask }) => {
  return (
    <div className="task-carousel">
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} onDeleteTask={onDeleteTask} />
      ))}
    </div>
  );
};

export default TaskCarousel;
