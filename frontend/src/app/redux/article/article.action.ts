import { Action, ActionCreator } from 'redux';
import { Article } from './article.model';

export const SET_INITIAL_ARTICLES = '[article] initial';

export interface SetArticlesAction extends Action {
  articles: Article[];
}

export const setInitalArticles: ActionCreator<
  SetArticlesAction
> = articles => ({
  type: SET_INITIAL_ARTICLES,
  articles: articles,
});

/**
 *
 */

export const SET_ARTICLE = '[article] article';

export interface SetArticleAction extends Action {
  article: Article;
}

export const SetArticle: ActionCreator<SetArticleAction> = article => ({
  type: SET_ARTICLE,
  article: article,
});

/**
 *
 */

export const GET_ARTICLES_INDENTIFY = '[article indentify]';

export interface GetArticleAction extends Action {
  indentity: string;
}

export const getArticlesIndentify: ActionCreator<
  GetArticleAction
> = indentity => ({
  type: GET_ARTICLES_INDENTIFY,
  indentity: indentity,
});
