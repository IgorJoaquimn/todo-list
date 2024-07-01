import  Task  from '../types/Task'; // Adjust path as per your project

export function groupTasksByDate(tasks: Task[]): { [key: string]: Task[] } {
  const groupedTasks: { [key: string]: Task[] } = {};

  tasks.forEach(task => {
    const dateKey = task.date;
    if (!groupedTasks[dateKey]) {
      groupedTasks[dateKey] = [];
    }
    groupedTasks[dateKey].push(task);
  });

  return groupedTasks;
}

export function sortTasksByDate(tasks: Task[]): Task[] {
    return tasks.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
}
  
