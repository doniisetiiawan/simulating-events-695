/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';

import webpackConfig from '@webpack';

import clientRender from './render/clientRender';

import { isMobile } from '@utils/device';

const isProduction = process.env.NODE_ENV === 'production';

const app = express();
const port = 3000;

const compiler = webpack(webpackConfig);

if (!isProduction) {
  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(express.static(path.join(__dirname, '../../public')));

  app.get('*.js', (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');
    next();
  });
}

app.use((req, res, next) => {
  req.isMobile = isMobile(req.headers['user-agent']);
  next();
});

app.use(clientRender());

app.disable('x-powered-by');

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
