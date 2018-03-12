import { UserState, UserReducer } from './redux/user/user.reducer';
import { Reducer, combineReducers } from 'redux';
import { ArticlesState, ArticleReducer } from './redux/article/article.reducer';

export * from './redux/user/user.reducer';
export * from './redux/article/article.reducer';

export interface AppState {
  user: UserState;
  articles: ArticlesState;
}

const root: Reducer<AppState> = combineReducers<AppState>({
  user: UserReducer,
  articles: ArticleReducer
});

export default root;
