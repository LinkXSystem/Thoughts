import { Component, Inject, OnInit } from '@angular/core';

import { Router } from './universal/component/navbar/proptypes';
import { Store } from 'redux';
import { HttpClient } from '@angular/common/http';

import { Response } from './common/response';
import { AuthService } from './services/auth.service';

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
    this.initial();
    this.service.fingerprint().subscribe(res => {
      console.log('====================================');
      console.log(res);
      console.log('====================================');
    });
  }

  initial() {
    const self = this;
  }
}
