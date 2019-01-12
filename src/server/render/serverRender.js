/* eslint-disable react/jsx-filename-extension,comma-dangle,no-shadow */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { matchPath } from 'react-router-dom';

import { isBrowser } from '@utils/frontend';

import configureStore from '@configureStore';

import routes from '@shared/routes';
import App from '../../client/App';

import html from './html';

import initialState from './initialState';

export default function serverRender() {
  return (req, res) => {
    const store = isBrowser() ? configureStore(initialState(req)) : {};

    const promises = routes.paths.reduce((promises, route) => {
      if (matchPath(req.url, route) && route.component && route.component.initialAction) {
        promises.push(Promise.resolve(store.dispatch(route.component.initialAction())));
      }

      return promises;
    }, []);

    Promise.all(promises)
      .then(() => {
        const initialState = store.getState();

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
          initialState
        }));
      })
      .catch((e) => {
        console.log('Promise Error: ', e);
      });
  };
}
