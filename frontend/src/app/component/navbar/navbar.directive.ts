import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[navbar-container]'
})
export class NavbarDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
