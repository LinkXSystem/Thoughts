import { Component, Inject, OnInit } from '@angular/core';

import { Router } from './universal/component/navbar/proptypes';
import { Store } from 'redux';
import { HttpClient } from '@angular/common/http';

import { Response } from './common/response';

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
    new Router('/project', '项目'),
    new Router('/user-detail', '简历'),
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.initial();
  }

  initial() {
    const self = this;
  }
}
