import { Component, Input } from '@angular/core';
import { type TUser } from '../../interfaces/User';
import { Task } from "../task/task";
import { NewTask } from "../new-task/new-task";
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({ required: true }) selectedUser!: TUser;
  isAddingTask: Boolean = false;

  constructor(private taskService: TasksService){}

  get tasksOfSelectedUser(){
    return this.taskService.getUserTasks(this.selectedUser.id);
  }

  get imagePath(){
    return this.selectedUser?.avatar ? 'users/' + this.selectedUser.avatar : undefined;
  }

  addTask(){
    this.isAddingTask = true;
  }

  closeAddTask() {
    this.isAddingTask = false;
  }
}
