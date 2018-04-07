import { Action, ActionCreator } from 'redux';
import { User } from './user.model';

export const SET_AUTHENTICATION = '[user] authentication';

export interface SetAuthenticationAction extends Action {
  authentication: boolean;
}

export const SetAuthentication: ActionCreator<
  SetAuthenticationAction
> = authentication => ({
  type: SET_AUTHENTICATION,
  authentication: authentication,
});

export const SET_USER = '[user] user';

export interface SetUserAction extends Action {
  user: User;
}

export const setUser: ActionCreator<SetUserAction> = user => ({
  type: SET_USER,
  user: user,
});

export const SET_ACTIVITY = '[user] activity';

export interface SetActivityAction extends Action {
  activity: boolean;
}

export const setActivity: ActionCreator<SetActivityAction> = activity => ({
  type: SET_ACTIVITY,
  activity: activity,
});
