import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
})
export class GithubComponent implements OnInit {
  isVisible: boolean = false;

  constructor() {}

  ngOnInit() {}

  showmodal() {
    this.isVisible = !this.isVisible;
  }
}
