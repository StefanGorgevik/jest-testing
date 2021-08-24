import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import PostsReducer from "./reducers/index";

export const middleWares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middleWares)(
  createStore
);

export const store = createStoreWithMiddleware(PostsReducer);
