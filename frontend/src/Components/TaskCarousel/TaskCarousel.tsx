// src/Components/TaskCarousel/TaskCarousel.jsx
import React from 'react';
import TaskCard from './TaskCard';
import './TaskCarousel.css'; // Example CSS import (optional)
import Task from "../../types/Task"

interface TaskCarouselProps {
  groupedTasks: { [key: string]: Task[] };
  onDeleteTask: (id: number) => void;
}

const TaskCarousel: React.FC<TaskCarouselProps> = ({ groupedTasks, onDeleteTask }) => {
  return (
    <div className="task-carousel">
      {Object.keys(groupedTasks).map(date => (
        <div key={date} className="task-group">
          <h3>{date}</h3>
          {groupedTasks[date].map(task => (
            <TaskCard key={task.id} task={task} onDeleteTask={onDeleteTask} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TaskCarousel;

