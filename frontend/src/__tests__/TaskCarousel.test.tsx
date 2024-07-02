// src/Components/TaskCarousel/TaskCarousel.test.tsx

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TaskCarousel from '../Components/TaskCarousel/TaskCarousel';

test('renders TaskCarousel component', () => {
  const groupedTasks = {
    '2024-07-01': [{ id: 1, description: 'Task 1', date: '2024-07-01' }],
    '2024-07-02': [{ id: 2, description: 'Task 2', date: '2024-07-02' }],
  };

  render(<TaskCarousel groupedTasks={groupedTasks} onDeleteTask={() => {}} />);

  expect(screen.getByText('01/07/24')).toBeInTheDocument(); // Ensure date formatting is correctly displayed
  expect(screen.getByText('Task 1')).toBeInTheDocument();
  expect(screen.getByText('02/07/24')).toBeInTheDocument(); // Ensure date formatting is correctly displayed
  expect(screen.getByText('Task 2')).toBeInTheDocument();
});
