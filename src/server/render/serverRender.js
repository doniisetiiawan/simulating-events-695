/* eslint-disable react/jsx-filename-extension,comma-dangle */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

import configureStore from '@configureStore';

import App from '../../client/App';

import html from './html';

import initialState from './initialState';

export default function serverRender() {
  return (req, res) => {
    const store = configureStore(initialState(req));

    const markup = ReactDOMServer.renderToString(
      <Provider store={store}>
        <App
          server
          location={req.url}
        />
      </Provider>
    );

    res.send(html({
      title: 'Codejobs',
      markup,
      initialState: initialState(req),
    }));
  };
}
