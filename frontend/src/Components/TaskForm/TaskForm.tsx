import React, { useState } from 'react';
import './TaskForm.css';

interface TaskFormProps {
  onCreateTask: (task: { description: string; date: string }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onCreateTask }) => {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const getCurrentDate = (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentDate = getCurrentDate();
    if (date < currentDate) {
      alert('Please select a date in the future.');
      return;
    }
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
          placeholder="Novo Lembrete"
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
          data-date-format="dd-mm-yyyy"
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
