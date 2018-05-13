import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/get.service';

import { ActivatedRoute, Router } from '@angular/router';
import { ItemPropType } from '../../universal/component/list/item-proptypes';
import { ArticleItemComponent } from '../../universal/component/list/article-item.component';

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

  list: ItemPropType[] = [];

  constructor(private service: GetService, private route: ActivatedRoute) {}

  ngOnInit() {
    const identify = this.route.snapshot.paramMap.get('identify');

    const self = this;

    self.service.column(identify).subscribe(res => {
      const { data } = res;
      self.data = Object.assign({}, data);
    });

    self.service
      .articles({
        column: identify,
      })
      .subscribe(res => {
        const { list } = res;

        self.list = list.map(item => {
          item = Object.assign({}, item, {
            href: `/article/${item.identify}`,
          });
          return new ItemPropType(ArticleItemComponent, item);
        });
      });
  }
}
