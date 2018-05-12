import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChange,
} from '@angular/core';
import { Message } from '../../../common/message';

@Component({
  selector: 'app-user-modify',
  templateUrl: './user-modify.component.html',
  styleUrls: ['./user-modify.component.scss'],
})
export class UserModifyComponent implements OnChanges {
  @Input() user: any;

  isVisible: boolean = false;

  username: string = '';
  position: string = '';
  description: string = '';

  @Output() update = new EventEmitter<Message>();

  constructor() {}

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const { username, position, description } = changes.user.currentValue;

    this.username = username;
    this.position = position;
    this.description = description;
  }

  showmodal() {
    this.isVisible = !this.isVisible;
  }

  backflow() {
    const { username, position, description } = this;

    this.update.emit(
      new Message('update', {
        username,
        position,
        description,
      }),
    );

    this.showmodal();
  }
}
