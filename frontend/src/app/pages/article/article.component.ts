import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Store } from 'redux';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}

  updateState(identify): void {}
}
