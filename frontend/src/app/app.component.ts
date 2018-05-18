import { Component, Inject, OnInit } from '@angular/core';

import { Router } from './universal/component/navbar/proptypes';
import { Store } from 'redux';
import { HttpClient } from '@angular/common/http';

import { Response } from './common/response';
import { AuthService } from './services/auth.service';

import Fingerprint2 = require('fingerprintjs2');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app';

  data: Router[] = [
    new Router('/blog', '博客'),
    new Router('/column', '专栏'),
    new Router('/note', '笔记'),
    new Router('/project', '项目'),
  ];

  constructor(private service: AuthService, private http: HttpClient) {}

  ngOnInit() {
    new Fingerprint2().get(result => {
      sessionStorage.setItem('fingerprint', result);
    });
  }
}
