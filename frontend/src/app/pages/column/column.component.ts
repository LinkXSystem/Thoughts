import { Component, OnInit } from '@angular/core';
import { ItemPropType } from '../../universal/component/list/item-proptypes';
import { ColumnItemComponent } from '../../universal/component/list/column-item.component';
import { GetService } from '../../services/get.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  data: ItemPropType[];

  constructor(private service: GetService) {}

  ngOnInit() {
    const {service} = this;

    const self = this;

    service.columns().subscribe(res => {
      const { list } = res;

      self.data = list.map(item => {
        item = Object.assign({}, item, {
          href: `/column/${item.identify}`
        })

        return new ItemPropType(ColumnItemComponent, item);
      })
    })
  }
}
