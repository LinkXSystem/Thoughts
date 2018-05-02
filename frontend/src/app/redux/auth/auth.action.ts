import { Action } from '@ngrx/store';

import { User, Authenticate } from './auth.model';

export enum AuthActionTypes {
  LoginRedirect = '[Auth] Login Redirect',
  Login = '[Auth] Login',
  Logout = '[Auth] Logout',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
}

export class LoginRedirect implements Action {
  readonly type = AuthActionTypes.LoginRedirect;
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: Authenticate) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: { user: User }) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload: any) {}
}

export type AuthActionsUnion =
  | LoginRedirect
  | Login
  | Logout
  | LoginSuccess
  | LoginFailure;
