import { Component } from '@angular/core';

import { Router } from './component/navbar/proptypes';
import { NavbarItemComponent } from './component/navbar/navbar-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  data: Router[] = [new Router('/blog', '博客'), new Router('/column', '专栏')];
}
