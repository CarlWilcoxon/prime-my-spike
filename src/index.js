import './index.css';
import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
// combineReducers
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import rootReducer from './redux/reducers'; // imports ./redux/reducers/index.js

import App from './components/App/App';

const storeInstance = createStore(
  rootReducer,
  applyMiddleware(logger),
);


ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
