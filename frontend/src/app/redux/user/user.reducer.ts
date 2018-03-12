import * as UserActions from './user.action';
import { User } from './user.model';
import { Action } from 'redux';
import { createSelector } from 'reselect';

export interface UserState {
  user: User;
}

const initialState: UserState = {
  user: {
    email: 'linksystem@gmail.com',
    name: 'linksystem',
    declaration: 'Thoughts博客设计者'
  }
};

export const UserReducer = (
  state: UserState = initialState,
  action: Action
): UserState => {
  switch (action.type) {
    case UserActions.SET_USER:
      const user: User = (<UserActions.SetUserAction>action).user;
      return {
        user: user
      };
    default:
      return state;
  }
};

export const getUserState = (state): UserState => state.user;

export const getUser = createSelector(
  getUserState,
  (state: UserState) => state.user
);
