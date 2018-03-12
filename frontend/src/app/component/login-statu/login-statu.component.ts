import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-statu',
  templateUrl: './login-statu.component.html',
  styleUrls: ['./login-statu.component.scss']
})
export class LoginStatuComponent implements OnInit {
  isVisible: boolean = false;

  constructor() {}

  ngOnInit() {}

  showmodal() {
    this.isVisible = !this.isVisible;
  }
}
