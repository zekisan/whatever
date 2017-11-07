import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
//import { Iterable } from 'immutable';

import rootReducer from './reducers';

const middlewares = [thunk];

// When running on development mode without the Redux DevTools, logs each action to the console, converting Immutable
// objects to plain JS objects. This is useful to debug failing tests on chromedriver.
/* if (process.env.NODE_ENV !== 'production' && !window.__REDUX_DEVTOOLS_EXTENSION__) {
  const immutableToJS = v =>
      Object.keys(v).reduce((r, k) => Object.assign(r, { [k]: Iterable.isIterable(v[k]) ? v[k].toJS() : v[k] }), {});

  middlewares.push(require('redux-logger')({ stateTransformer: immutableToJS, actionTransformer: immutableToJS }));
} */

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);

export default store;