import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { retry } from 'rxjs/operators';

@Injectable()
export class GetService {
  constructor(private client: HttpClient) {}

  articles(options = {}): Observable<any> {
    const { client } = this;

    return client.post('/api/v1/article', {}).pipe(retry(3));
  }

  article(identify): Observable<any> {
    const { client } = this;
    return client.get(`/api/v1/article/${identify}`);
  }

  columns(options = {}): Observable<any> {
    const { client } = this;

    return client.post('/api/v1/column', options).pipe(retry(3));
  }

  column(identify): Observable<any> {
    const { client } = this;
    return client.get(`/api/v1/column/${identify}`);
  }

  notices(options = {}): Observable<any> {
    const { client } = this;

    return client.post('/api/v1/notice', options).pipe(retry(3));
  }

  notice(): Observable<any> {
    const { client } = this;
    return client.get(`/api/v1/notice`);
  }

  footnotes(options = {}): Observable<any> {
    const { client } = this;

    return client.post('/api/v1/footnote', options).pipe(retry(3));
  }

  footnote(): Observable<any> {
    const { client } = this;
    return client.get(`/api/v1/footnote`);
  }
}
