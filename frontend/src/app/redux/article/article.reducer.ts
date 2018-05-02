import { Article } from './article.model';
import { ArticleUnion, ArticleTypes } from './article.action';

export interface State {
  articles: Article[];
  reader: Article | null;
}

export const initial: State = {
  articles: [],
  reader: null,
};

export function ArticleReducer(state = initial, action: ArticleUnion): State {
  switch (action.type) {
    case ArticleTypes.ArticleInitial:
      return Object.assign({}, state, {
        articles: action.payload.articles,
      });
    case ArticleTypes.ArticleReader:
      return Object.assign({}, state, {
        reader: action.payload.reader,
      });

    default:
      return state;
  }
}

export const getArticles = (state: State) => state.articles;

export const getReader = (state: State) => state.reader;
