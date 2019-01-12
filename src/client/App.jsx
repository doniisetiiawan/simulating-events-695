import React from 'react';
import { BrowserRouter, StaticRouter } from 'react-router-dom';

import routes from '../shared/routes';

export default ({ server, location, context = {} }) => {
  let router = (
    <BrowserRouter>
      {routes.all}
    </BrowserRouter>
  );

  if (server) {
    router = (
      <StaticRouter location={location} context={context}>
        {routes.all}
      </StaticRouter>
    );
  }

  return router;
};
