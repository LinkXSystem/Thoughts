import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../../../common/message';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
})
export class GithubComponent implements OnInit {
  isVisible: boolean = false;

  url: string;

  github = {};

  @Output() transmit = new EventEmitter<Message>();

  constructor(private client: HttpClient) {}

  ngOnInit() {}

  showmodal() {
    this.isVisible = !this.isVisible;
  }

  transfer(url) {
    const regx = /^https:\/\/github.com\/[a-zA-Z0-9]{1,}/;
    if (regx.test(url)) {
      const index = url.lastIndexOf('/');
      const name = url.substring(index + 1);

      this.getUserInfo(name);
    }
  }

  getUserInfo(username) {
    const { client } = this;

    client.get(`https://api.github.com/users/${username}`).subscribe(res => {
      this.github = res;
    });
  }

  backflow() {
    this.transmit.emit(new Message('github', this.github));
  }
}
