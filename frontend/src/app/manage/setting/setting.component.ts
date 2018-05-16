import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../../redux/auth/auth.model';
import { Message } from '../../common/message';
import { UserService } from '../../services/user.service';

import { NzNotificationService } from 'ng-zorro-antd';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  user: any = {
    username: '',
  };

  constructor(
    private action: StoreService,
    private service: UserService,
    private _notification: NzNotificationService,
  ) {}

  ngOnInit() {
    this.service.obtain().subscribe(res => {
      this.user = res.data;
    });
  }

  updateState(): void {}

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
}
