import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss'],
})
export class ArticleViewComponent {
  @Input() data: any;

  constructor() {}
}
