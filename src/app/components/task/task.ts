import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type TTask } from '../../interfaces/Task';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input() task!: TTask;
  @Output() completeTask = new EventEmitter<string>();

  setCompleteTask() {
    this.completeTask.emit(this.task.id);
  }
}
