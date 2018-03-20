import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
})
export class FavouriteComponent implements OnInit {
  tabs = [
    {
      name: '文章',
      content: '文章',
    },
    {
      name: '专栏',
      content: '专栏',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
