import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../../services/store.service';

import { NzNotificationService } from 'ng-zorro-antd';

import { Base64 } from 'js-base64';
import { GetService } from '../../services/get.service';

@Component({
  selector: 'app-type-editor',
  templateUrl: './type-editor.component.html',
  styleUrls: ['./type-editor.component.scss'],
})
export class TypeEditorComponent implements OnInit {
  html: string = '';

  list: any;

  name: string;

  record: string;

  type = {
    footnote: '注脚',
    notice: '公告',
  };

  gridStyle = {
    width: '100%',
    textAlign: 'left',
  };

  constructor(
    private service: GetService,
    private action: StoreService,
    private route: ActivatedRoute,
    private router: Router,
    private _notification: NzNotificationService,
  ) {}

  ngOnInit() {
    const type = this.route.snapshot.paramMap.get('type');

    this.record = type;
    this.name = this.type[type];

    this.getData(type);
  }

  transfer(content) {
    this.html = content;
  }

  store() {
    const { html } = this;
    const data = {
      level: 'info',
      content: Base64.encode(html),
    };

    this.list = this.list.concat([data]);

    this.action.store(this.record, data).subscribe(res => {
      this._notification.create('info', '消息', '创建成功');
    });
  }

  getData(type) {
    switch (type) {
      case 'notice':
        this.service.notices().subscribe(res => {
          this.list = res.list;
        });
        break;
      case 'footnote':
        this.service.footnotes().subscribe(res => {
          this.list = res.list;
        });
    }
  }
}
