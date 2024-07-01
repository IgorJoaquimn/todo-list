// __tests__/taskController.test.ts

import fs from 'fs';
import { readTasks, writeTasks } from '../src/controllers/taskController';

const tasksFilePath = "__tests__/test_tasks.json";

describe('Task Controller', () => {
  // Test readTasks function
  describe('readTasks', () => {
    beforeEach(() => {
      // Create an empty tasks.json file before each test
      fs.writeFileSync(tasksFilePath, '');
    });

    it('should return an empty array if tasks file is empty', () => {
      const tasks = readTasks();
      expect(tasks).toEqual([]);
    });

    it('should return parsed tasks from JSON file', () => {
      const tasksToWrite = [
        { id: 1, description: 'Task 1', date: '2024-07-02' },
        { id: 2, description: 'Task 2', date: '2024-07-03' },
      ];

      // Write tasks to tasks.json file
      writeTasks(tasksToWrite);

      // Read tasks from tasks.json file
      const tasks = readTasks();

      expect(tasks).toEqual(tasksToWrite);
    });
  });

  // Test writeTasks function
  describe('writeTasks', () => {
    it('should write tasks to JSON file', () => {
      const tasksToWrite = [
        { id: 1, description: 'Task 1', date: '2024-07-02' },
        { id: 2, description: 'Task 2', date: '2024-07-03' },
      ];

      // Write tasks to tasks.json file
      writeTasks(tasksToWrite);

      // Read tasks from tasks.json file to verify
      const tasks = JSON.parse(fs.readFileSync(tasksFilePath, 'utf-8'));

      expect(tasks).toEqual(tasksToWrite);
    });
  });
});
