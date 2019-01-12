/* eslint-disable import/no-extraneous-dependencies,global-require,no-shadow */
import express from 'express';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import webpack from 'webpack';

import webpackConfig from '@webpack';

import { isMobile, isBot } from '@utils/device';
import clientRender from './render/clientRender';

import apiController from './controllers/api';

const isProduction = process.env.NODE_ENV === 'production';

const app = express();
const port = 3000;

const compiler = webpack(webpackConfig);

app.use('/api', apiController);

app.use(express.static(path.join(__dirname, '../../public')));

app.use((req, res, next) => {
  req.isMobile = isMobile(req.headers['user-agent']);
  req.isBot = isBot(req.headers['user-agent']);

  next();
});

if (!isProduction) {
  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(
    compiler.compilers.find(compiler => compiler.name === 'client'),
  ));
} else {
  app.get('*.js', (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');
    next();
  });
}

app.use(clientRender());

if (isProduction) {
  try {
    const serverRender = require('../../dist/server.js').default;

    app.use(serverRender());
  } catch (e) {
    throw e;
  }
}

app.use(webpackHotServerMiddleware(compiler));

app.disable('x-powered-by');

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
