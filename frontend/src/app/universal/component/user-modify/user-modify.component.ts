import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-modify',
  templateUrl: './user-modify.component.html',
  styleUrls: ['./user-modify.component.scss'],
})
export class UserModifyComponent implements OnInit {
  isVisible: boolean = false;

  nickname: string = '';
  position: string = '';
  description: string = '';

  constructor() {}

  ngOnInit() {}

  showmodal() {
    this.isVisible = !this.isVisible;
  }

  backflow() {}
}
