import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/get.service';
import { ItemPropType } from '../../universal/component/list/item-proptypes';
import { ArticleItemComponent } from '../../universal/component/list/article-item.component';
import { ColumnItemComponent } from '../../universal/component/list/column-item.component';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
})
export class FavouriteComponent implements OnInit {
  tabs = [
    {
      name: '文章',
      data: [],
      loading: true,
    },
    {
      name: '专栏',
      data: [],
      loading: true,
    },
  ];

  constructor(private service: GetService) {}

  ngOnInit() {
    this.getArticleList();
  }

  selects(tab) {
    switch (tab.name) {
      case '专栏':
        this.getColumnList();
        return;
      case '文章':
        this.getColumnList();
        return;
    }
    console.log('====================================');
    console.log(tab);
    console.log('====================================');
  }

  getArticleList() {
    const self = this;

    if (self.tabs[0].data.length != 0) {
      return;
    }

    self.service.articles().subscribe(res => {
      self.tabs[0].loading = false;

      const { list } = res;

      self.tabs[0].data = list.map(item => {
        item = Object.assign({}, item, {
          href: `/control/article-editor/${item.identify}`,
        });
        return new ItemPropType(ArticleItemComponent, item);
      });
    });
  }

  getColumnList() {
    const self = this;

    if (self.tabs[1].data.length != 0) {
      return;
    }

    self.service.columns().subscribe(res => {
      self.tabs[1].loading = false;

      const { list } = res;

      self.tabs[1].data = list.map(item => {
        item = Object.assign({}, item, {
          href: `/control/column-editor/${item.identify}`,
        });
        return new ItemPropType(ColumnItemComponent, item);
      });
    });
  }
}
