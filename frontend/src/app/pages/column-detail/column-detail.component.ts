import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/get.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-column-detail',
  templateUrl: './column-detail.component.html',
  styleUrls: ['./column-detail.component.scss'],
})
export class ColumnDetailComponent implements OnInit {
  data = {
    title: '',
    description: '',
  };

  constructor(private service: GetService, private route: ActivatedRoute) {}

  ngOnInit() {
    const identify = this.route.snapshot.paramMap.get('identify');

    const self = this;

    self.service.column(identify).subscribe(res => {
      const { data } = res;
      self.data = Object.assign({}, data);
    });
  }
}
