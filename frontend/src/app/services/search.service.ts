import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { retry } from 'rxjs/operators';

@Injectable()
export class SearchService {
  constructor(private client: HttpClient) {}

  search(type, data): Observable<any> {
    const { client } = this;

    const url = `/api/v1/search/${type}`;

    return client.post(url, data).pipe(retry(3));
  }
}
