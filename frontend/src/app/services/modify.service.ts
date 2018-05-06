import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { retry } from 'rxjs/operators';

@Injectable()
export class ModifyService {
  constructor(private client: HttpClient) {}

  update(type, data): Observable<any> {
    const { client } = this;

    const url = `/modify/${type}`;

    return client.post(url, data).pipe(retry(3));
  }
}
