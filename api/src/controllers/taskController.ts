import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Task } from '../models/task.js';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const tasksFilePath =
  process.env.NODE_ENV === 'test'
    ? path.resolve('__tests__/test_tasks.json')
    : path.resolve('data/tasks.json');

// Helper function to read tasks from the JSON file
const readTasks = (): Task[] => {
    const data = fs.readFileSync(tasksFilePath, 'utf-8');
    console.log(data)
    if (!data)
        return []; // Retorna um array vazio se o arquivo estiver vazio
    return JSON.parse(data);
};

// Helper function to write tasks to the JSON file
const writeTasks = (tasks: Task[]): void => {
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
};

export const getAllTasks = (req: Request, res: Response) => {
    const tasks = readTasks();
    res.json(tasks);
};

export const createTask = (req: Request, res: Response) => {
    const tasks = readTasks();
    const newTask: Task = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        description: req.body.description,
        date: req.body.date
    };
    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
};


export const deleteTask = (req: Request, res: Response) => {
    const tasks = readTasks();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex !== -1) {
        const deletedTask = tasks.splice(taskIndex, 1);
        writeTasks(tasks);
        res.json(deletedTask[0]);
    } else {
        res.status(404).send('Task not found');
    }
};


export { readTasks, writeTasks };