import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../../redux/auth/auth.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  user: User;

  constructor() {}

  updateState(): void {}
}
