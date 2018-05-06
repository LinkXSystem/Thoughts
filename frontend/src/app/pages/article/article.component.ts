import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Store } from 'redux';
import { GetService } from '../../services/get.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  data: any;

  constructor(
    private service: GetService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    const identify = this.route.snapshot.paramMap.get('identify');

    const self = this;

    self.service.article(identify).subscribe(res => {
      const { data } = res;
      self.data = data;
    });
  }

  updateState(identify): void {}
}
