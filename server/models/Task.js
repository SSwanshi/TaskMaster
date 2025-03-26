const fs = require('fs');
const path = require('path');

const tasksFilePath = path.join(__dirname, '../tasks.json');

class Task {
  static getAll() {
    const data = fs.readFileSync(tasksFilePath);
    return JSON.parse(data);
  }

  static saveAll(tasks) {
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
  }

  static getById(id) {
    const tasks = this.getAll();
    return tasks.find(task => task.id === id);
  }

  static create(newTask) {
    const tasks = this.getAll();
    tasks.push(newTask);
    this.saveAll(tasks);
    return newTask;
  }

  static update(id, updatedTask) {
    const tasks = this.getAll();
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      tasks[index] = { ...tasks[index], ...updatedTask };
      this.saveAll(tasks);
      return tasks[index];
    }
    return null;
  }

  static delete(id) {
    const tasks = this.getAll();
    const filteredTasks = tasks.filter(task => task.id !== id);
    this.saveAll(filteredTasks);
    return filteredTasks.length !== tasks.length;
  }
}

module.exports = Task;