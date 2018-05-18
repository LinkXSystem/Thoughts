import { Component, OnInit, Inject } from '@angular/core';
import Fingerprint2 = require('fingerprintjs2');
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';

import { User } from '../../redux/auth/auth.model';
import { Message } from '../../common/message';
import { UserService } from '../../services/user.service';

import { StoreService } from '../../services/store.service';
import { CloudService } from '../../services/cloud.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  user: any = {
    username: '',
  };

  seven = {};

  constructor(
    private action: StoreService,
    private service: UserService,
    private cloud: CloudService,
    private router: Router,
    private _notification: NzNotificationService,
  ) {}

  ngOnInit() {
    this.service.obtain().subscribe(res => {
      this.user = res.data;
    });

    this.cloud.token().subscribe(res => {
      this.seven = res;
    });
  }

  github(message: Message) {
    this.action
      .store('account', {
        type: 'visitor',
        token: '',
        name: 'github',
        data: JSON.stringify(message.data),
      })
      .subscribe(res => {
        this._notification.create('info', '消息', 'GITHUB更新成功');
      });
  }

  update(message: Message) {
    const { identify } = this.user;

    const data = Object.assign({}, message.data, { identify });

    this.service.update(data).subscribe(res => {
      this.user = Object.assign({}, this.user, data);
      this._notification.create('info', '消息', '信息更新成功');
    });
  }

  portrait(message: Message) {
    const { identify } = this.user;

    const data = message.data;

    this.service
      .update({
        identify,
        portrait: data.image,
      })
      .subscribe(res => {
        this.user = Object.assign({}, this.user, {
          portrait: data.image,
        });
        this._notification.create('info', '消息', '头像更新成功');
      });
  }

  fingerprint() {
    new Fingerprint2().get(vestige => {
      let { identify, fingerprint } = this.user;

      if (fingerprint) {
        vestige = '';
      }

      this.service
        .update({
          identify,
          fingerprint: vestige,
        })
        .subscribe(res => {
          this.user = Object.assign({}, this.user, {
            fingerprint: vestige,
          });
          this._notification.create('info', '消息', '指纹更新成功');
        });
    });
  }

  logout() {
    sessionStorage.setItem('login', '');
    this.router.navigate(['/blog']);
  }
}
