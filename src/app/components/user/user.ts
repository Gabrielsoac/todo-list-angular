import { Component, EventEmitter, input, Input, output, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})

export class User {

  @Input( {required: true }) id!: string;
  @Input({ required: true}) avatar!: string;
  @Input( { required: true}) name!: string;

  @Output() select = new EventEmitter();

  get imagePath() {
    return 'users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
