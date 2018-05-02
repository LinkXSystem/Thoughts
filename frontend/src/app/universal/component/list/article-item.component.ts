import { Component, Input } from '@angular/core';
import { ItemComponent } from './item-interface.component';

@Component({
  template: `
    <div class="item">
      <div>
        <h2>
          <a href="{{data.href}}">{{data.title}}</a>
        </h2>
        <ul>
          <li class="icon">{{data.type}}</li>
          <li>{{data.date | date:'yyyy.MM.dd'}}</li>
        </ul>
        <div class="markdown" [innerHTML]="(data.content | markdown)"></div>
      </div>
    </div>
  `,
  styleUrls: ['./list.component.scss']
})
export class ArticleItemComponent implements ItemComponent {
  @Input() data: any;
}
