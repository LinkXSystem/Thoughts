import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { AppState, getArticles, getArticle } from '../../app.reducer';
import { Store } from 'redux';
import { AppStore } from '../../app.store';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  data: any;

  constructor(
    @Inject(AppStore) private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.updateState(params['indentify']);
    });
  }

  updateState(indentify): void {
    const state = this.store.getState();
    const article = getArticle(state);
    console.log('====================================');
    console.log(article);
    console.log('====================================');
  }
}
