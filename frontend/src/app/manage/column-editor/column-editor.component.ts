import { Component, OnInit } from '@angular/core';

import { GetService } from '../../services/get.service';
import { StoreService } from '../../services/store.service';
import { NzNotificationService } from 'ng-zorro-antd';

import { ActivatedRoute, Router } from '@angular/router';
import { UpdateService } from '../../services/update.service';

import { Base64 } from 'js-base64';

import { ItemPropType } from '../../universal/component/list/item-proptypes';
import { ArticleItemComponent } from '../../universal/component/list/article-item.component';

@Component({
  selector: 'app-column-editor',
  templateUrl: './column-editor.component.html',
  styleUrls: ['./column-editor.component.scss'],
})
export class ColumnEditorComponent implements OnInit {
  status: boolean = true;

  html: string = '';

  data = {
    title: '',
    description: '',
  };

  list: ItemPropType[] = [];

  constructor(
    private service: GetService,
    private modify: UpdateService,
    private action: StoreService,
    private route: ActivatedRoute,
    private router: Router,
    private _notification: NzNotificationService,
  ) {}

  ngOnInit() {
    const identify = this.route.snapshot.paramMap.get('identify');

    const self = this;

    if (identify !== 'column-design') {
      self.status = false;
      self.service.column(identify).subscribe(res => {
        const { data } = res;
        self.data = Object.assign({}, data);
      });

      self.service
        .articles({
          column: identify,
        })
        .subscribe(res => {
          const { list } = res;

          self.list = list.map(item => {
            item = Object.assign({}, item, {
              href: `/control/article-editor/${item.identify}`,
            });
            return new ItemPropType(ArticleItemComponent, item);
          });
        });
    }
  }

  transfer(content) {
    const { data } = this;

    this.data = Object.assign({}, data, {
      description: Base64.encode(content),
    });
  }

  build() {
    this.status ? this.stores() : this.update();
  }

  stores() {
    const { action, data } = this;

    action.store('column', this.data).subscribe(res => {
      this._notification.create('info', '消息', '专栏创建成功');
    });
  }

  update() {
    this.modify.update('column', this.data).subscribe(res => {
      this._notification.create('info', '消息', '专栏更新成功');
    });
  }
}
