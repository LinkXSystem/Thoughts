import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Message } from '../../common/message';
import { StoreService } from '../../services/store.service';

import { NzNotificationService } from 'ng-zorro-antd';
import { FunctionService } from '../../services/function.service';
import { GetService } from '../../services/get.service';
import { UpdateService } from '../../services/update.service';

@Component({
  selector: 'app-article-writer',
  templateUrl: './article-writer.component.html',
  styleUrls: ['./article-writer.component.scss'],
})
export class ArticleWriterComponent implements OnInit {
  status: boolean = true;

  article = {
    content: '',
  };
  type = 'article';

  select = '';

  options = [];

  constructor(
    private action: FunctionService,
    private service: GetService,
    private _store: StoreService,
    private _update: UpdateService,
    private route: ActivatedRoute,
    private router: Router,
    private _notification: NzNotificationService,
  ) {}

  ngOnInit() {
    this.action.getColumnName().subscribe(res => {
      this.options = res.list;
    });

    const self = this;

    const identify = this.route.snapshot.paramMap.get('identify');

    if (identify !== 'article-design') {
      self.status = false;

      self.service.article(identify).subscribe(res => {
        const { data } = res;

        self.article = data;
        self.select = data.column;
      });
    }
  }

  subscribe(message: Message) {
    const { status, data } = message;

    switch (status) {
      case 'article':
        this.status
          ? this.create(
              Object.assign({}, message.data, { column: this.select }),
            )
          : this.update(
              Object.assign(this.article, message.data, {
                column: this.select,
              }),
            );
        break;
      case 'draft':
        break;
      default:
        break;
    }
  }

  create(data) {
    this._store.store('article', data).subscribe(res => {
      this._notification.create('info', '消息', '文章创建成功');
    });
  }

  update(data) {
    this._update.update('article', data).subscribe(res => {
      this._notification.create('info', '消息', '文章更新成功');
    });
  }
}
