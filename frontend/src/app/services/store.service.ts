import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { retry } from 'rxjs/operators';

@Injectable()
export class StoreService {
  constructor(private client: HttpClient) {}

  article(data) {
    const { client } = this;
    client
      .post('/storage/article', data)
      .pipe(retry(3))
      .subscribe(
        res => {
          console.log('====================================');
          console.log(res);
          console.log('====================================');
        },
        err => {},
      );
  }

  store(type, data): Observable<any> {
    const { client } = this;

    const url = `/storage/${type}`;

    return client.post(url, data).pipe(retry(3));
  }
}
