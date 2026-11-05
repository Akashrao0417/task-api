import * as taskService from '../services/taskService.js';

// Turns ?completed=true/false into a boolean, or undefined when not provided
function parseCompleted(value) {
  if (value === undefined) return undefined;
  return value === 'true';
}

export async function getTasks(req, res, next) {
  try {
    const completed = parseCompleted(req.query.completed);
    const tasks = await taskService.getAllTasks(completed);
    res.json(tasks);
  } catch (error) {
    next(error);
  }
}

export async function createTask(req, res, next) {
  try {
    const { title, completed } = req.body;
    const task = await taskService.createTask({ title, completed });
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
}
