import { Component, Input } from '@angular/core';
import { ItemComponent } from './item-interface.component';

@Component({
  template: `
    <div class="column">
      <h2><a href="{{data.url}}">{{data.title}}</a></h2>
      <p>{{data.descption}}</p>
    </div>
  `,
  styleUrls: ['./list.component.scss']
})
export class ColumnItemCompoent implements ItemComponent {
  @Input() data: any;
}
