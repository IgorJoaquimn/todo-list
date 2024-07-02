
import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../Components/TaskForm/TaskForm';

test('renders TaskForm component', () => {
  render(<TaskForm onCreateTask={() => {}} />);
  
  expect(screen.getByLabelText('Task Description')).toBeInTheDocument();
  expect(screen.getByLabelText('Date')).toBeInTheDocument();
  expect(screen.getByText('Crie')).toBeInTheDocument();
});

test('submits the form with task details', () => {
  const handleCreateTask = jest.fn();
  render(<TaskForm onCreateTask={handleCreateTask} />);

  fireEvent.change(screen.getByLabelText('Task Description'), { target: { value: 'New Task' } });
  fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2024-07-02' } });
  fireEvent.click(screen.getByText('Crie'));

  expect(handleCreateTask).toHaveBeenCalledWith({ description: 'New Task', date: '2024-07-02' });
});
