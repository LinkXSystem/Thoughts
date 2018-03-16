import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  animations: [
    trigger('markdown', [
      state(
        'active',
        style({
          width: '50%'
        })
      ),
      state(
        'hidden',
        style({
          width: 'calc(100% - 1px)'
        })
      ),
      transition('active => hidden', animate('100ms ease-in')),
      transition('hidden => active', animate('100ms ease-out'))
    ]),
    trigger('textarea', [
      state(
        'active',
        style({
          width: '50%'
        })
      ),
      state(
        'hidden',
        style({
          visibility: 'hidden',
          width: '0%',
          padding: '0px'
        })
      ),
      transition('active => hidden', animate('100ms ease-in')),
      transition('hidden => active', animate('100ms ease-out'))
    ])
  ]
})
export class EditorComponent implements OnInit {
  statu: string = 'active';

  html: string = '';

  isVisible: boolean = false;

  constructor() {}

  ngOnInit() {}

  markdown(content): void {
    this.html = content;
  }

  reverse() {
    this.statu = this.statu === 'active' ? 'hidden' : 'active';
  }

  showmodal() {
    this.isVisible = !this.isVisible;
  }
}
