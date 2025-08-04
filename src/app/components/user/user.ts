import { Component, EventEmitter, input, Input, output, Output} from '@angular/core';
import { TUser } from '../../interfaces/User';
import { Card } from "../../shared/card/card";

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css'
})

export class User {

  @Input( {required: true} ) user!: TUser;
  @Input() isSelected: boolean = false;

  @Output() select = new EventEmitter();

  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
