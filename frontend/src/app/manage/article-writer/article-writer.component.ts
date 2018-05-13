import { Component, OnInit } from '@angular/core';
import { Message } from '../../common/message';
import { StoreService } from '../../services/store.service';

import { NzNotificationService } from 'ng-zorro-antd';
import { FunctionService } from '../../services/function.service';

@Component({
  selector: 'app-article-writer',
  templateUrl: './article-writer.component.html',
  styleUrls: ['./article-writer.component.scss'],
})
export class ArticleWriterComponent implements OnInit {
  select;

  options = [];

  constructor(
    private action: FunctionService,
    private service: StoreService,
    private _notification: NzNotificationService,
  ) {}

  ngOnInit() {
    this.action.getColumnName().subscribe(res => {
      console.log('====================================');
      console.log(res);
      console.log('====================================');
      this.options = res.list;
    });
  }

  store(message: Message) {
    const { status, data } = message;
    switch (status) {
      case 'article':
        this.article(Object.assign({}, message.data, { column: this.select }));
        break;
      default:
        console.log('====================================');
        console.log(status, data);
        console.log('====================================');
    }
  }

  article(data) {
    this.service.store('article', data).subscribe(res => {
      this._notification.create('info', '消息', '文章创建成功');
    });
  }
}
