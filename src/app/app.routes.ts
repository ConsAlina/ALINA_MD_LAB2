import { Routes } from '@angular/router';
import { TaskForm } from './task-form/task-form.component';
import { TaskList } from './task-list/task-list.component';

export const routes: Routes = [ 
  { path: 'form', component: TaskForm },
  { path: 'list', component: TaskList },
  { path: '', redirectTo: '/form', pathMatch: 'full' }
];