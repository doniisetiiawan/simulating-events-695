/* eslint-disable import/no-extraneous-dependencies */
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import WebpackNotifierPlugin from 'webpack-notifier';
import CompressionPlugin from 'compression-webpack-plugin';
import webpack from 'webpack';

const isDevelopment = process.env.NODE_ENV !== 'production';
const isAnalyzer = process.env.ANALYZER === 'true';

export default (type) => {
  const plugins = [
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
      chunkFilename: './css/[id].css',
    }),
  ];

  if (isAnalyzer) {
    plugins.push(
      new BundleAnalyzerPlugin(),
    );
  }

  if (isDevelopment) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      // new BundleAnalyzerPlugin(),
      new WebpackNotifierPlugin(),
    );
  } else {
    plugins.push(
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js(\?.*)?$/i,
        threshold: 10240,
        minRatio: 0.8,
      }),
    );
  }

  return plugins;
};
