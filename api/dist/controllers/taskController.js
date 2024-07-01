import fs from 'fs';
const tasksFilePath = 'src/data/tasks.json';
// Helper function to read tasks from the JSON file
const readTasks = () => {
    const data = fs.readFileSync(tasksFilePath, 'utf-8');
    console.log(data);
    if (!data)
        return []; // Retorna um array vazio se o arquivo estiver vazio
    return JSON.parse(data);
};
// Helper function to write tasks to the JSON file
const writeTasks = (tasks) => {
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
};
export const getAllTasks = (req, res) => {
    const tasks = readTasks();
    res.json(tasks);
};
export const createTask = (req, res) => {
    const tasks = readTasks();
    const newTask = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        description: req.body.description,
        date: req.body.date
    };
    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
};
export const deleteTask = (req, res) => {
    const tasks = readTasks();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex !== -1) {
        const deletedTask = tasks.splice(taskIndex, 1);
        writeTasks(tasks);
        res.json(deletedTask[0]);
    }
    else {
        res.status(404).send('Task not found');
    }
};
//# sourceMappingURL=taskController.js.map