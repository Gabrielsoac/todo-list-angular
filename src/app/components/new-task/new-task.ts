import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TNewTask } from '../../interfaces/Task';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() cancelAddingTask = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<TNewTask>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate= '';

  onCancelAddingTask(){
    this.cancelAddingTask.emit();
  }

  onSubmit(){
    this.addTask.emit(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDueDate
      }
    )
  }
}
