import merge from 'webpack-merge';

import commonConfig from './webpack.config.common';
import {
  context,
  entry,
  externals,
  name,
  output,
  plugins,
  target,
} from './configuration';

const type = 'server';

export default merge(commonConfig(type), {
  context: context(type),
  entry: entry(type),
  externals: externals(type),
  name: name(type),
  output: output(type),
  plugins: plugins(type),
  target: target(type),
});
