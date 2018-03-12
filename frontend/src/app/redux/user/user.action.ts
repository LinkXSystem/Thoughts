import { Action, ActionCreator } from 'redux';
import { User } from './user.model';

export const SET_USER = '[user] login';

export interface SetUserAction extends Action {
  user: User;
}

export const setUser: ActionCreator<SetUserAction> = user => ({
  type: SET_USER,
  user: user
});
