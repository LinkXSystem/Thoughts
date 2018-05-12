import { Component, OnInit } from '@angular/core';
import { Message } from '../../common/message';
import { StoreService } from '../../services/store.service';

import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-writer',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.scss'],
})
export class WritingComponent implements OnInit {
  constructor(
    private service: StoreService,
    private _notification: NzNotificationService,
  ) {}

  ngOnInit() {}

  store(message: Message) {
    const { status, data } = message;
    switch (status) {
      case 'article':
        this.article(message.data);
        break;
      default:
        console.log('====================================');
        console.log(status, data);
        console.log('====================================');
    }
  }

  article(data) {
    this.service.store('article', data).subscribe(res => {
      this._notification.create('info', '消息', '专栏创建成功');
    });
  }
}
