import { Action, ActionCreator } from 'redux';
import { Article } from './article.model';

export const SET_INITIAL_ARTICLES = '[article] initial';

export interface SetArticleAction extends Action {
  articles: Article[];
}

export const setInitalArticle: ActionCreator<SetArticleAction> = articles => ({
  type: SET_INITIAL_ARTICLES,
  articles: articles
});

export const GET_ARTICLES_INDENTIFY = '[article indentify]';

export interface GetArticleAction extends Action {
  indentity: string;
}

export const getArticlesIndentify: ActionCreator<
  GetArticleAction
> = indentity => ({
  type: GET_ARTICLES_INDENTIFY,
  indentity: indentity
});
