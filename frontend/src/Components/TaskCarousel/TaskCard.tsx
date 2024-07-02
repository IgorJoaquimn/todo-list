import React from 'react';
import './TaskCard.css'; // Example CSS import (optional)
import  Task  from '@custom_types/Task'; // Adjust path as per your project


interface TaskCardProps {
  task: Task;
  onDeleteTask: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDeleteTask }) => {
  const { id, description, date } = task;

  const handleDelete = () => {
    onDeleteTask(id);
  };

  return (
    <div className="task-card">
      <p>{description}</p>
      <button className="delete-button" onClick={handleDelete}>
        X
      </button>
    </div>
  );
};

export default TaskCard;
