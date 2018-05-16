import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Message } from '../../../common/message';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<Message>();

  constructor() {}

  ngOnInit() {}

  action(content) {
    this.search.emit(new Message('search', content));
  }
}
