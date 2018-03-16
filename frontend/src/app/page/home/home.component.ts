import { Component, OnInit, Inject } from '@angular/core';
import { ItemPropType } from '../../universal/component/list/item-proptypes';
import { ArticleItemCompoent } from '../../universal/component/list/article-item.component';
import { Store } from 'redux';
import { AppState, getArticles } from '../../app.reducer';
import { AppStore } from '../../app.store';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: ItemPropType[];

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.updateState());
    this.updateState();
  }

  ngOnInit() {}

  updateState(): void {
    const state = this.store.getState();
    const articles = getArticles(state);
    this.articles = articles.map(element => {
      return new ItemPropType(ArticleItemCompoent, element);
    });
  }
}
