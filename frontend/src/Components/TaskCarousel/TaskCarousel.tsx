// src/Components/TaskCarousel/TaskCarousel.jsx
import React from 'react';
import TaskCard from './TaskCard';
import './TaskCarousel.css'; // Example CSS import (optional)

interface Task {
  id: number;
  description: string;
  date: string;
}

interface TaskCarouselProps {
  groupedTasks: { [key: string]: Task[] };
  onDeleteTask: (id: number) => void;
}


const TaskCarousel: React.FC<TaskCarouselProps> = ({ groupedTasks, onDeleteTask }) => {
  
  const sortedDates = Object.keys(groupedTasks).sort();
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit',timeZone: 'UTC' }).format(date);
  };

  return (
    <div className="task-grid">
      {sortedDates.map(date => (
        <div key={date} className="task-group">
          <h3>{formatDate(date)}</h3>
          <div className="task-group-items">
            {groupedTasks[date].map(task => (
              <TaskCard key={task.id} task={task} onDeleteTask={onDeleteTask} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default TaskCarousel;

