import { Component, Input } from '@angular/core';
import { type TUser } from '../../interfaces/User';
import { Task } from "../task/task";
import { NewTask } from "../new-task/new-task";
import { type TNewTask } from '../../interfaces/Task';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({ required: true }) selectedUser!: TUser | undefined;
  isAddingTask: Boolean = false;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  get tasksOfSelectedUser(){
    return this.tasks.filter((task) => task.userId === this.selectedUser?.id)
  }

  get imagePath(){
    return this.selectedUser?.avatar ? 'users/' + this.selectedUser.avatar : undefined;
  }

  removeTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  addTask(){
    this.isAddingTask = true;
  }

  cancelAddTask() {
    this.isAddingTask = false;
  }

  addNewTask(taskData: TNewTask){
    if(this.selectedUser){
      this.tasks.unshift(
        {
          id: `t${this.tasks.length + 2}`,
          title: taskData.title,
          summary: taskData.summary,
          dueDate: taskData.date,
          userId: this.selectedUser.id
        }
      );

      this.isAddingTask = false;
    }
    throw new Error('User not defined');
  }
}
