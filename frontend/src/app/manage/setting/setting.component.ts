import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../../redux/auth/auth.model';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  user: User;

  constructor() {}

  ngOnInit() {}

  updateState(): void {}
}
