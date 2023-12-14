// src\redux\reducers\newsReducer.ts
import { SET_NEWS } from '../actions/newsActions';

const initialState = {
  news: [],
};

const newsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
