import { Component } from '@angular/core';

import { Router } from './universal/component/navbar/proptypes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  data: Router[] = [
    new Router('/blog', '博客'),
    new Router('/column', '专栏'),
    new Router('/project', '项目'),
  ];
}
