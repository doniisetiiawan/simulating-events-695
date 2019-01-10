import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from '@configureStore';

import App from './client/App';

const store = configureStore(window.initialState);

const rootElement = document.querySelector('#root');

const renderApp = (Component) => {
  render(
    <Provider store={store}>
      <Component />
    </Provider>,
    rootElement,
  );
};

renderApp(App);
