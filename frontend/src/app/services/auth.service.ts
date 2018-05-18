import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

// import { getFingerPrint } from '../utils/fingerprint';

import Fingerprint2 = require('fingerprintjs2');

@Injectable()
export class AuthService {
  fingerprint = '';

  constructor(private client: HttpClient) {
    new Fingerprint2().get(result => {
      this.fingerprint = result;
    });
  }

  grant(): Observable<any> {
    const { client } = this;

    return client.post('/auth/fingerprint', {
      fingerprint: sessionStorage.getItem('fingerprint'),
    });
  }

  login(data): Observable<any> {
    const { client } = this;
    return client.post('/auth/signin', data).pipe(retry(2));
  }
}
