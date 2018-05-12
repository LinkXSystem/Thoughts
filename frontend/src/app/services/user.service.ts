import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { retry } from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor(private client: HttpClient) {}

  obtain(): Observable<any> {
    const { client } = this;

    const url = '/obtain/user';

    return client.get(url).pipe(retry(3));
  }

  update(data): Observable<any> {
    const { client } = this;

    const url = `/update/user`;

    return client.post(url, data).pipe(retry(3));
  }
}
