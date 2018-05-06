import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { retry } from 'rxjs/operators';

@Injectable()
export class DeleteService {
  constructor(private client: HttpClient) {}

  delete(type: string, identify: string): Observable<any> {
    const { client } = this;

    const url = `/delete/${type}/${identify}`;

    return client.delete(url).pipe(retry(3));
  }
}
