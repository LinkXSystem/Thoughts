import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from 'redux';

import { Router } from '@angular/router';

import { retry } from 'rxjs/operators';

@Injectable()
export class LoginService {
  private url: string = '/auth/signin';

  constructor(private client: HttpClient, private router: Router) {}

  login(data) {
    const { client, url } = this;
    client
      .post(this.url, data)
      .pipe(retry(2))
      .subscribe(
        res => {
          this.router.navigate(['/control']);
        },
        err => {},
      );
  }
}
