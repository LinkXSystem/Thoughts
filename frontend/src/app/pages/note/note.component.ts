import { Component, OnInit } from '@angular/core';
import { NoteItemComponent } from '../../universal/component/list/note-item.component';
import { ItemPropType } from '../../universal/component/list/item-proptypes';
import { GetService } from '../../services/get.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  notes: ItemPropType[];

  notice = {
    content: '',
  };

  footnote = {
    content: '',
  };

  constructor(private sources: GetService) {}

  ngOnInit() {
    const self = this;
    self.sources.notes().subscribe(res => {
      const { list } = res;
      self.notes = list.map(item => {
        item = Object.assign({}, item, {
          href: `/note-detail/${item.identify}`,
        });
        return new ItemPropType(NoteItemComponent, item);
      });
    });

    self.sources.notice().subscribe(res => {
      self.notice = res.data;
    });

    self.sources.footnote().subscribe(res => {
      self.footnote = res.data;
    });
  }
}
