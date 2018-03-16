import { Type } from '@angular/core';

export class NavbarItem {
  constructor(public component: Type<any>, public data: any) {}
}
