import { Component, OnInit } from '@angular/core';
import { Message } from '../../common/message';
import { StoreService } from '../../services/store.service';

import { NzNotificationService } from 'ng-zorro-antd';
import { GetService } from '../../services/get.service';
import { UpdateService } from '../../services/update.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-writer',
  templateUrl: './note-writer.component.html',
  styleUrls: ['./note-writer.component.scss'],
})
export class NoteWriterComponent implements OnInit {
  status: boolean = true;

  note = {
    content: '',
  };

  type = 'note';

  constructor(
    private _update: UpdateService,
    private service: GetService,
    private _store: StoreService,
    private route: ActivatedRoute,
    private router: Router,
    private _notification: NzNotificationService,
  ) {}

  ngOnInit() {
    const identify = this.route.snapshot.paramMap.get('identify');

    const self = this;

    if (identify !== 'note-design') {
      self.status = false;

      self.service.note(identify).subscribe(res => {
        const { data } = res;

        self.note = data;
      });
    }
  }

  subscribe(message: Message) {
    const { status, data } = message;

    switch (status) {
      case 'note':
        this.status
          ? this.create(Object.assign({}, message.data))
          : this.update(Object.assign(this.note, message.data));
        break;
      default:
        break;
    }
  }

  create(data) {
    this._store.store('note', data).subscribe(res => {
      this._notification.create('info', '消息', '笔记创建成功');
    });
  }

  update(data) {
    this._update.update('note', data).subscribe(res => {
      this._notification.create('info', '消息', '笔记更新成功');
    });
  }
}
