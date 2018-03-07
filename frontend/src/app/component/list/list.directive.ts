import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[list-container]'
})
export class ListDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
