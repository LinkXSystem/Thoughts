import { Component, OnInit } from '@angular/core';
import { Message } from '../../common/message';
import { StoreService } from '../../services/store.service';

import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-note-writer',
  templateUrl: './note-writer.component.html',
  styleUrls: ['./note-writer.component.scss'],
})
export class NoteWriterComponent implements OnInit {
  constructor(
    private service: StoreService,
    private _notification: NzNotificationService,
  ) {}

  ngOnInit() {}

  store(message: Message) {
    const { status, data } = message;
    switch (status) {
      case 'article':
        this.note(Object.assign({}, message.data));
        break;
      default:
        console.log('====================================');
        console.log(status, data);
        console.log('====================================');
    }
  }

  note(data) {
    this.service.store('note', data).subscribe(res => {
      this._notification.create('info', '消息', '笔记创建成功');
    });
  }
}
