import * as ArticleAction from './article.action';
import { Article } from './article.model';
import { Action } from 'redux';
import { createSelector } from 'reselect';
import { element } from 'protractor';

export interface ArticlesState {
  articles: Article[];
  reader: Article;
}

const initialState: ArticlesState = {
  articles: [
    {
      identify: '201803121209',
      href: '/article/201803121209',
      title: 'Thoughts 博客简介及使用方法',
      type: 'Markdown',
      date: new Date(),
      content: '### Thoughts 博客简介及使用方法',
    },
  ],
  reader: {
    identify: '201803121209',
    href: '/article/201803121209',
    title: 'Thoughts 博客简介及使用方法',
    type: 'Markdown',
    date: new Date(),
    content: '### Thoughts 博客简介及使用方法',
  },
};

export const ArticleReducer = (
  state: ArticlesState = initialState,
  action: Action,
): ArticlesState => {
  switch (action.type) {
    case ArticleAction.SET_INITIAL_ARTICLES:
      const articles: Article[] = (<ArticleAction.SetArticlesAction>action)
        .articles;
      return Object.assign({}, state, { articles: articles });
    case ArticleAction.SET_ARTICLE:
      const article: Article = (<ArticleAction.SetArticleAction>action).article;
      return Object.assign({}, state, { reader: article });
    case ArticleAction.GET_ARTICLES_INDENTIFY:
      const indentity: string = (<ArticleAction.GetArticleAction>action)
        .indentity;

      const object = state.articles
        .filter(element => {
          return element.identify === indentity;
        })
        .pop();

      return {
        articles: state.articles,
        reader: Object.assign({}, state.reader, object),
      };
    default:
      return state;
  }
};

export const getArticlesState = (state): ArticlesState => state.articles;

export const getArticles = createSelector(
  getArticlesState,
  (state: ArticlesState) => state.articles,
);

export const getArticle = createSelector(
  getArticlesState,
  (state: ArticlesState) => state.reader,
);
