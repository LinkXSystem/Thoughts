import { Component, OnInit, Inject } from '@angular/core';
import { ItemPropType } from '../../universal/component/list/item-proptypes';
import { ArticleItemComponent } from '../../universal/component/list/article-item.component';
import { Store } from 'redux';
import { element } from 'protractor';
import { Message } from '../../common/message';
import { LoginService } from '../../services/login.service';
import { GetService } from '../../services/get.service';
import { log } from 'util';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles: ItemPropType[];

  notice = {
    content: '',
  };

  footnote = {
    content: '',
  };

  disabled: boolean = false;

  constructor(
    private service: LoginService,
    private sources: GetService,
    private action: SearchService,
  ) {}

  ngOnInit() {
    const self = this;
    self.sources.articles().subscribe(res => {
      const { list } = res;

      self.articles = list.map(item => {
        item = Object.assign({}, item, {
          href: `/article/${item.identify}`,
        });
        return new ItemPropType(ArticleItemComponent, item);
      });
    });

    self.sources.notice().subscribe(res => {
      self.notice = res.data;
    });

    self.sources.footnote().subscribe(res => {
      self.footnote = res.data;
    });
  }

  updateState(): void {}

  login(message: Message) {
    this.service.login(message.data);
  }

  search(message: Message) {
    this.action
      .search('article', {
        key: message.data,
      })
      .subscribe(res => {
        const { list } = res;

        this.articles = [];

        this.articles = list.map(item => {
          item = Object.assign({}, item, {
            href: `/article/${item.identify}`,
          });
          return new ItemPropType(ArticleItemComponent, item);
        });
      });
  }
}
