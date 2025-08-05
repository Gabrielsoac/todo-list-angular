import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { User } from "./components/user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./components/tasks/tasks";
import { TUser } from './interfaces/User';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('easy-track');
  users: Array<TUser> = DUMMY_USERS;
  selectedUser!: TUser;

  selectUser(id: string) {
    const data = this.users.find((user) => user.id === id);
    if(data) this.selectedUser = data;
  }
}
