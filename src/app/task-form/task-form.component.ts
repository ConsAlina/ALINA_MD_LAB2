import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../service/service.service';

@Component({
  selector: 'task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskForm {
  newTask = '';
  newUser = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.newTask.trim() && this.newUser.trim()) {
      this.taskService.addTask(this.newTask, this.newUser);
      this.newTask = '';
      this.newUser = '';
    }
  }
}