import { Component, OnInit } from '@angular/core';
import { Message } from '../../common/message';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-writer',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.scss'],
})
export class WritingComponent implements OnInit {
  constructor(private service: StoreService) {}

  ngOnInit() {}

  store(message: Message) {
    const { status, data } = message;
    switch (status) {
      case 'article':
        this.service.article(message.data);
        break;
      default:
        console.log('====================================');
        console.log(status, data);
        console.log('====================================');
    }
  }
}
