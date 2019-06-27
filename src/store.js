import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { apiMiddleware } from "./middlewares/apiMiddleware";

const initialState = {};
const middleware = [apiMiddleware];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
