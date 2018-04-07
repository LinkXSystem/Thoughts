import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../../../common/message';

@Component({
  selector: 'app-login-statu',
  templateUrl: './login-statu.component.html',
  styleUrls: ['./login-statu.component.scss'],
})
export class LoginStatuComponent {
  @Input() disabled: boolean = true;

  isVisible: boolean = false;
  email: string;
  password: string;

  @Output() login = new EventEmitter<Message>();

  constructor() {}

  showmodal() {
    if (this.disabled) return;

    this.isVisible = !this.isVisible;
  }

  backflow() {
    const { email, password } = this;
    if (!(email && password)) return;
    this.login.emit(
      new Message('login', {
        email,
        password,
      }),
    );
  }
}
