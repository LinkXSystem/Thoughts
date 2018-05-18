import {
  Component,
  OnInit,
  Input,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../../../common/message';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.scss'],
})
export class PortraitComponent implements OnInit {
  @Input() image;
  @Input() token;
  @Input() zone;
  @Input() domain;

  input;

  @Output() portrait = new EventEmitter<Message>();

  constructor(private client: HttpClient, private element: ElementRef) {}

  ngOnInit() {}

  trigger() {
    this.input = this.element.nativeElement.querySelector('input');
    this.input.click();
  }

  upload(event) {
    const form = new FormData();

    form.append('file', event.target.files[0]);
    form.append('token', this.token);

    this.client.post(this.zone, form).subscribe(
      (res: any) => {
        this.image = `${this.domain}/${res.hash}`;
        this.portrait.emit(
          new Message('portrait', {
            image: this.image,
          }),
        );
      },
      err => {},
    );
  }
}
