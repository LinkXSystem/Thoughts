import { Component, Input } from '@angular/core';

@Component({
  template: `<li><a href="{{data.href}}">{{data.name}}</a></li>`
})
export class NavbarItemComponent {
  @Input() data: any;
}
