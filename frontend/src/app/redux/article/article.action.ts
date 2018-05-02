import { Action } from '@ngrx/store';
import { Article } from './article.model';

export enum ArticleTypes {
  ArticleInitial = '[Article] Initial Data',
  ArticleReader = '[Article] reader',
}

export class ArticleInitial implements Action {
  readonly type = ArticleTypes.ArticleInitial;

  constructor(
    public payload: {
      articles: Article[];
    },
  ) {}
}

export class ArticleReader implements Action {
  readonly type = ArticleTypes.ArticleReader;

  constructor(
    public payload: {
      reader: Article;
    },
  ) {}
}

export type ArticleUnion = ArticleInitial | ArticleReader;
