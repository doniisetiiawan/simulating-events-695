/* eslint-disable comma-dangle */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import configureStore from '@configureStore';

import { isBrowser } from '@utils/frontend';
import App from './App';

const store = isBrowser() ? configureStore(window.initialState) : {};

const rootElement = document.querySelector('#root');

const renderApp = () => {
  render(
    <Provider store={store}>
      <Component />
    </Provider>,
    rootElement
  );
};

renderApp(App);

export default hot(module)(renderApp);
