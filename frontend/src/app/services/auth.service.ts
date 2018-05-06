import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

// import { getFingerPrint } from '../utils/fingerprint';

import Fingerprint2 = require('fingerprintjs2');

@Injectable()
export class AuthService {
  constructor(private client: HttpClient) {}

  fingerprint(): Observable<any> {
    const { client } = this;

    const fingerprint = new Fingerprint2().get(result => {
      console.log('====================================');
      console.log(result);
      console.log('====================================');
    });

    return client.post('/auth/fingerprint', {
      fingerprint,
    });
  }
}
