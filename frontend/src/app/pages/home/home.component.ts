import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';

import { ItemPropType } from '../../universal/component/list/item-proptypes';
import { ArticleItemComponent } from '../../universal/component/list/article-item.component';
import { Store } from 'redux';
import { element } from 'protractor';
import { Message } from '../../common/message';
import { GetService } from '../../services/get.service';
import { log } from 'util';
import { SearchService } from '../../services/search.service';
import { AuthService } from '../../services/auth.service';

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
    private action: SearchService,
    private auth: AuthService,
    private sources: GetService,
    private router: Router,
    private _notification: NzNotificationService,
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

    this.fingerprint();

    self.sources.notice().subscribe(res => {
      self.notice = res.data;
    });

    self.sources.footnote().subscribe(res => {
      self.footnote = res.data;
    });
  }

  login(message: Message) {
    this.auth.login(message.data).subscribe(
      res => {
        window.sessionStorage.setItem('login', res.data.identify);
        this.router.navigate(['/control']);
      },
      err => {
        this._notification.create('error', '登录', '用户名或密码错误');
      },
    );
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

  fingerprint() {
    this.auth.grant().subscribe(
      res => {
        if (res.status === 'error') this.disabled = true;
      },
      err => {},
    );
  }
}
