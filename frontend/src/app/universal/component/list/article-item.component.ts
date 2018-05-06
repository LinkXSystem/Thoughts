import { Component, Input } from '@angular/core';
import { ItemComponent } from './item-interface.component';

@Component({
  template: `
    <div class="item">
      <div>
        <h2>
          <a routerLink="{{data.href}}">{{data.title}}</a>
        </h2>
        <ul>
          <li *ngFor="let item of data.icons" class="icon">
            {{item}}
          </li>
          <li>{{data.date | date:'yyyy.MM.dd'}}</li>
        </ul>
        <div class="markdown" [innerHTML]="(data.content | decode | markdown)"></div>
      </div>
    </div>
  `,
  styleUrls: ['./list.component.scss'],
})
export class ArticleItemComponent implements ItemComponent {
  @Input() data: any;
}
