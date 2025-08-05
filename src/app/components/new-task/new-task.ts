import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();

  constructor(private tasksService: TasksService) {}

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate= '';

  onCancelAddingTask(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask(this.userId, {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate
    })
    this.close.emit();
  }
}
