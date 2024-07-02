import React from 'react';
import './TaskCard.css'; // Example CSS import (optional)

interface Task {
  id: number;
  description: string;
  date: string;
}


interface TaskCardProps {
  task: Task;
  onDeleteTask: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDeleteTask }) => {
  const { id, description, date: _ } = task;

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
