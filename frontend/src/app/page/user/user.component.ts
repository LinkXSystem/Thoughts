import { Component, Inject, OnInit } from '@angular/core';
import { Store } from 'redux';
import { AppState, getUser } from '../../app.reducer';
import { AppStore } from '../../app.store';
import { User } from '../../redux/user/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user: User;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.updateState());
    this.updateState();
  }

  updateState(): void {
    const state = this.store.getState();
    this.user = getUser(state);
  }
}
