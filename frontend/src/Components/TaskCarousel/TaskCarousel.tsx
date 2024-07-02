// src/Components/TaskCarousel/TaskCarousel.jsx
import React from 'react';
import TaskCard from './TaskCard';
import './TaskCarousel.css'; // Example CSS import (optional)
import Task from "@custom_types/Task"

interface TaskCarouselProps {
  groupedTasks: { [key: string]: Task[] };
  onDeleteTask: (id: number) => void;
}


const TaskCarousel: React.FC<TaskCarouselProps> = ({ groupedTasks, onDeleteTask }) => {
  
  const sortedDates = Object.keys(groupedTasks).sort();
  return (
    <div className="task-grid">
      {sortedDates.map(date => (
        <div key={date} className="task-group">
          <h3>{date}</h3>
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

