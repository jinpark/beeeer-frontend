import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'
import App from './App';
import reducer from './reducers'
import 'font-awesome/css/font-awesome.css'
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger()
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware, logger)));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
