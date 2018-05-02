import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Injectable()
export class GetService {
  constructor(private client: HttpClient) {}

  article() {
    const { client } = this;

    client
      .get('/api/v1/article')
      .pipe(retry(3))
      .subscribe(res => {
        console.log(res);
      });
  }

  column() {
    const { client } = this;

    client
      .get('/api/v1/column')
      .pipe(retry(3))
      .subscribe(res => {
        console.log(res);
      });
  }
}
