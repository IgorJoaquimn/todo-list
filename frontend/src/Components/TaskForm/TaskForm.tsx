import React, { useState } from 'react';
import './TaskForm.css';

interface TaskFormProps {
  onCreateTask: (task: { description: string; date: string }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onCreateTask }) => {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreateTask({ description, date });
    setDescription('');
    setDate('');
  };

  return (
    <div className="task-form-container">
      <form className="task-form" onSubmit={handleSubmit}>
        <label htmlFor="taskDescription">Task Description</label>
        <input
          id="taskDescription"
          type="text"
          placeholder="Escreva o lembrete"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          aria-label="Task Description"
        />
        <label htmlFor="taskDate">Date</label>
        <input
          id="taskDate"
          type="date"
          value={date}
          placeholder="dd-mm-yyyy"
          onChange={(e) => setDate(e.target.value)}
          required
          aria-label="Date"
        />
        <button type="submit">Crie</button>
      </form>
    </div>
  );
};

export default TaskForm;
