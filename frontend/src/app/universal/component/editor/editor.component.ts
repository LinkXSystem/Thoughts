import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChange,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Base64 } from 'js-base64';
import { Message } from '../../../common/message';
import { UploadFile } from 'ng-zorro-antd';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  animations: [
    trigger('markdown', [
      state(
        'active',
        style({
          width: '50%',
        }),
      ),
      state(
        'hidden',
        style({
          width: 'calc(100% - 1px)',
        }),
      ),
      transition('active => hidden', animate('100ms ease-in')),
      transition('hidden => active', animate('100ms ease-out')),
    ]),
    trigger('textarea', [
      state(
        'active',
        style({
          width: '50%',
        }),
      ),
      state(
        'hidden',
        style({
          visibility: 'hidden',
          width: '0%',
          padding: '0px',
        }),
      ),
      transition('active => hidden', animate('100ms ease-in')),
      transition('hidden => active', animate('100ms ease-out')),
    ]),
  ],
})
export class EditorComponent implements OnInit, OnChanges {
  @Output() feedback = new EventEmitter<Message>();

  @Input() type = '';
  @Input() data = {};

  @Input() certificate = {};

  status: string = 'active';

  title: string = '';
  icons: string = '';
  html: string = '';
  content: string = '';

  isVisible: boolean = false;

  constructor(private client: HttpClient) {}

  ngOnInit() {
    const { client } = this;
    // client.get('http://111.230.112.23:3000/api/v1/cloud/seven').subscribe(res => {
    //   this.certificate = res;
    //   console.log('====================================');
    //   console.log(res);
    //   console.log('====================================');
    // });
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const { icons, title, content } = changes.data.currentValue;

    if (icons) {
      this.icons = icons.join(' ');
    }

    this.title = title;
    this.html = Base64.decode(content);
    this.content = Base64.decode(content);
  }

  markdown(content): void {
    this.html = content;
  }

  reverse() {
    this.status = this.status === 'active' ? 'hidden' : 'active';
  }

  showmodal() {
    this.isVisible = !this.isVisible;
  }

  store() {
    console.log('====================================');
    console.log(this.type);
    console.log('====================================');
    const { title, icons, html } = this;
    this.feedback.emit(
      new Message(this.type, {
        icons: icons.split(' '),
        title,
        content: Base64.encode(html),
      }),
    );
  }

  draft() {
    // const { title, type, html } = this;
    // this.feedback.emit(
    //   new Message('draft', {
    //     title,
    //     type,
    //     html,
    //   }),
    // );
  }

  upload(info: { file: UploadFile }) {
    console.log('====================================');
    console.log(info);
    console.log('====================================');
  }
}
