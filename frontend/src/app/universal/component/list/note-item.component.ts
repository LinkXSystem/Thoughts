import { Component, Input } from '@angular/core';
import { ItemComponent } from './item-interface.component';

@Component({
  template: `
    <div class="column">
      <h2><a href="{{data.href}}">{{data.title}}</a></h2>
      <div class="markdown" [innerHTML]="(data.content | decode | markdown)"></div>
    </div>
  `,
  styleUrls: ['./list.component.scss'],
})
export class NoteItemComponent implements ItemComponent {
  @Input() data: any;
}
