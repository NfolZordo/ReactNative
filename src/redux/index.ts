// src\redux\index.ts
import { createStore, combineReducers } from 'redux';
import newsReducer from './reducers/newsReducer';

const rootReducer = combineReducers({
  news: newsReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default store;