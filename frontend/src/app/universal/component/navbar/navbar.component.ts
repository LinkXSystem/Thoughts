import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ComponentFactoryResolver,
  AfterViewInit
} from '@angular/core';

import { Router } from './proptypes';
import { NavbarDirective } from './navbar.directive';
import { NavbarItemComponent } from './navbar-item.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() blog: string = 'Thoughts';
  @Input() routes: Router[];

  constructor() {}
}
