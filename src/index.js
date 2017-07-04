import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReduxPromise from "redux-promise";

import PostsIndex from "./components/PostsIndex";
import PostsNew from "./components/PostsNew";

import reducers from "./reducers";

console.log(2 + 2);

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={PostsIndex} />
          <Route path="/posts/new" component={PostsNew} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
