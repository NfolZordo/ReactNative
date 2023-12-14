// src\redux\actions\newsActions.ts
export const SET_NEWS = 'SET_NEWS';

export const setNews = (news: any) => ({
  type: SET_NEWS,
  payload: news,
});