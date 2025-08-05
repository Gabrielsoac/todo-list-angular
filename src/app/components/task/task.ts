import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type TTask } from '../../interfaces/Task';
import { Card } from "../../shared/card/card";

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
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
