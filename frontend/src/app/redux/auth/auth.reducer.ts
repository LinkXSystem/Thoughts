import { User } from './auth.model';
import { AuthActionsUnion, AuthActionTypes } from './auth.action';

export interface State {
  loggedIn: boolean;
  user: User | null;
}

export const initial: State = {
  loggedIn: false,
  user: null,
};

export function AuthReducer(state = initial, action: AuthActionsUnion): State {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user,
      };
    case AuthActionTypes.Logout:
      return initial;
    default:
      return state;
  }
}

export const getLoggedIn = (state: State) => state.loggedIn;

export const getUser = (state: State) => state.user;
