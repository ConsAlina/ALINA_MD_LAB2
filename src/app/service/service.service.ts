import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  user: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private nextId = 1;

  constructor() {}

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string, user: string) {
  this.tasks.push({
    id: this.nextId++,
    title: title,
    completed: false,
    user: user
  });
}


  toggleTask(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }

  getTaskCount(): number {
    return this.tasks.length;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  getCompletedCount(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  getPendingCount(): number {
    return this.tasks.filter(task => !task.completed).length;
  }


}