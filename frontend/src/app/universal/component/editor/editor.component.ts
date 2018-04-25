import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Base64 } from 'js-base64';
import { Message } from '../../../common/message';

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
export class EditorComponent implements OnInit {
  @Output() feedback = new EventEmitter<Message>();

  status: string = 'active';
  html: string = '';
  title: string = '';
  type: string = '';
  isVisible: boolean = false;

  constructor() {}

  ngOnInit() {}

  markdown(content): void {
    this.html = content;
  }

  reverse() {
    this.status = this.status === 'active' ? 'hidden' : 'active';
  }

  showmodal() {
    this.isVisible = !this.isVisible;
  }

  save() {
    const { title, type, html } = this;
    const icons = type.split(' ');
    const content = Base64.encode(html);
    this.feedback.emit(
      new Message('article', {
        title,
        icons,
        content,
      }),
    );
  }

  draft() {
    const { title, type, html } = this;
    this.feedback.emit(
      new Message('draft', {
        title,
        type,
        html,
      }),
    );
  }
}
