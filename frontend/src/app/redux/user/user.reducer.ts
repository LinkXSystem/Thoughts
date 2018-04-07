import * as UserActions from './user.action';
import { User } from './user.model';
import { Action } from 'redux';
import { createSelector } from 'reselect';

export interface UserState {
  authentication: boolean;
  user: User;
  activity: boolean;
}

const initialState: UserState = {
  authentication: false,
  user: undefined,
  activity: false,
};

export const UserReducer = (
  state: UserState = initialState,
  action: Action,
): UserState => {
  switch (action.type) {
    case UserActions.SET_AUTHENTICATION:
      const authentication: boolean = (<UserActions.SetAuthenticationAction>action)
        .authentication;
      return Object.assign({}, state, {
        authentication: authentication,
      });
    case UserActions.SET_USER:
      const user: User = (<UserActions.SetUserAction>action).user;
      return Object.assign({}, state, {
        user: user,
      });
    case UserActions.SET_ACTIVITY:
      const activity: boolean = (<UserActions.SetActivityAction>action)
        .activity;
      return Object.assign({}, state, {
        activity: activity,
      });
    default:
      return state;
  }
};

export const getUserState = (state): UserState => state.user;

export const getUser = createSelector(
  getUserState,
  (state: UserState) => state.user,
);
