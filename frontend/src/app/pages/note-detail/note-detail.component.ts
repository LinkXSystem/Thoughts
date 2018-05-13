import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Store } from 'redux';
import { GetService } from '../../services/get.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss'],
})
export class NoteDetailComponent implements OnInit {
  data: any;

  constructor(
    private service: GetService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    const identify = this.route.snapshot.paramMap.get('identify');

    const self = this;

    self.service.note(identify).subscribe(res => {
      const { data } = res;
      self.data = data;
    });
  }
}
