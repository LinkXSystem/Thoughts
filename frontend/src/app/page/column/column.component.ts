import { Component, OnInit } from '@angular/core';
import { ItemPropType } from '../../component/list/item-proptypes';
import { ColumnItemCompoent } from '../../component/list/column-item.component';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  data: ItemPropType[] = [
    new ItemPropType(ColumnItemCompoent, {
      url: '/column/list/javascript',
      title: 'JavaScript笔记',
      descption: '数据测试中'
    })
  ];

  constructor() {}

  ngOnInit() {}
}
