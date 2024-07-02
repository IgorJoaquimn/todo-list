// src/Components/TaskCard/TaskCard.test.tsx

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskCard from '../Components/TaskCarousel/TaskCard';

test('renders TaskCard component', () => {
  const task = {
    id: 1,
    description: 'Test Task',
    date: '2024-07-02',
  };

  render(<TaskCard task={task} onDeleteTask={() => {}} />);

  expect(screen.getByText('Test Task')).toBeInTheDocument();
  expect(screen.getByText('X')).toBeInTheDocument();
});

test('deletes the task when delete button is clicked', () => {
  const task = {
    id: 1,
    description: 'Test Task',
    date: '2024-07-02',
  };

  const handleDeleteTask = jest.fn();
  render(<TaskCard task={task} onDeleteTask={handleDeleteTask} />);

  fireEvent.click(screen.getByText('X'));

  expect(handleDeleteTask).toHaveBeenCalledWith(1); // Assuming task.id is passed to onDeleteTask
});
