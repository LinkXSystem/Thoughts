import { Component, OnInit, Inject } from '@angular/core';
import { ItemPropType } from '../../universal/component/list/item-proptypes';
import { ArticleItemCompoent } from '../../universal/component/list/article-item.component';
import { Store } from 'redux';
import { AppState, getArticles } from '../../app.reducer';
import { AppStore } from '../../app.store';
import { element } from 'protractor';
import { Message } from '../../common/message';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles: ItemPropType[];

  disabled: boolean = false;

  constructor(
    @Inject(AppStore) private store: Store<AppState>,
    private service: LoginService,
  ) {
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

  login(message: Message) {
    this.service.login(message.data);
    console.log(message);
  }
}
