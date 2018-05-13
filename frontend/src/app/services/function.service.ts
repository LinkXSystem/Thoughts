import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { retry } from 'rxjs/operators';

@Injectable()
export class FunctionService {
  constructor(private client: HttpClient) {}

  getColumnName(): Observable<any> {
    const { client } = this;

    return client.get('/api/v1/simple/column').pipe(retry(3));
  }
}
