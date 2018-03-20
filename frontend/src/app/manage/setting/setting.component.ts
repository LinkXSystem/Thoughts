import { Component, OnInit, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppState, getUser } from '../../app.reducer';
import { AppStore } from '../../app.store';
import { User } from '../../redux/user/user.model';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  user: User;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.updateState());
    this.updateState();
  }

  ngOnInit() {}

  updateState(): void {
    const state = this.store.getState();
    this.user = getUser(state);
  }
}
