import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { retry } from 'rxjs/operators';

@Injectable()
export class CloudService {
  constructor(private client: HttpClient) {}

  token(): Observable<any> {
    const { client } = this;

    const url = `/cloud/v1/seven`;

    return client.get(url).pipe(retry(3));
  }
}
