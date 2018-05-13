import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/get.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteService } from '../../services/delete.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.scss'],
})
export class ArticleEditorComponent implements OnInit {
  identify = '';

  data: any;

  constructor(
    private source: GetService,
    private action: DeleteService,
    private route: ActivatedRoute,
    private router: Router,
    private _notification: NzNotificationService,
  ) {}

  ngOnInit() {
    const identify = this.route.snapshot.paramMap.get('identify');

    this.identify = identify;
    const self = this;

    self.source.article(identify).subscribe(res => {
      const { data } = res;
      self.data = data;
    });
  }

  updateState(identify): void {}

  remove() {
    const { identify } = this.data;

    const self = this;

    this.action.delete('article', identify).subscribe(res => {
      this._notification.create('info', '消息', '删除成功, 将在 10 秒后跳转');
      setTimeout(() => {
        self.router.navigate(['/control']);
      }, 10000);
    });
  }
}
