// src/Pages/TaskManagerPage/TaskManagerPage.tsx
import React from 'react';
import TaskForm from '@components/TaskForm/TaskForm';
import TaskCarousel from '@components/TaskCarousel/TaskCarousel';
import { useTaskManager } from '@hooks/useTaskManager';
import "./TaskManagerPage.css"

const TaskManagerPage: React.FC = () => {
  const { groupedTasks, handleAddTask, handleDeleteTask } = useTaskManager();

  return (
    <main>
      <section id="todoist">
      <h1>
        Lembretes
        <span>Termine suas tarefas, um passo de cada vez.</span>
      </h1>
      <hr></hr>
      </section>
      <section id="tasks_block">
        <TaskForm onCreateTask={handleAddTask} />
        <TaskCarousel groupedTasks={groupedTasks} onDeleteTask={handleDeleteTask} />
      </section>
    </main>
  );
};

export default TaskManagerPage;
