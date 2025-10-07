import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../service/service.service';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskList {
  constructor(public taskService: TaskService) {}

  toggleTask(id: number) {
    this.taskService.toggleTask(id);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }
}