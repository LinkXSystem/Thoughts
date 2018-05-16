import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footnote',
  templateUrl: './footnote.component.html',
  styleUrls: ['./footnote.component.scss'],
})
export class FootnoteComponent implements OnInit {
  @Input() footnote: any = {};

  constructor() {}

  ngOnInit() {}
}
