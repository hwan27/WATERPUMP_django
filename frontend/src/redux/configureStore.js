import { combineReducers, createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import { connectRouter } from "connected-react-router";
import createHistory from "history/createBrowserHistory";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import user from "redux/modules/user";
import cities from "redux/modules/cities";
import sectors from "redux/modules/sectors";
import towns from "redux/modules/towns";
import modems from "redux/modules/modems";
import { i18nState } from "redux-i18n";

const env = process.env.NODE_ENV;

const history = createHistory();

const middlewares = [thunk, routerMiddleware(history)];

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
  user,
  cities,
  sectors,
  towns,
  modems,
  router: connectRouter(history),
  i18nState
});

let store;
if (env === "development") {
  store = initialState =>
    createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
} else {
  store = initialState => createStore(reducer, applyMiddleware(...middlewares));
}

export { history };

export default store();
