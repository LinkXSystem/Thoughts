export interface Authenticate {
  token: string;
  scope: string;
}

export interface User {
  identify: string;
  username: string;
  email: string;
  fingerprint: string;
}
