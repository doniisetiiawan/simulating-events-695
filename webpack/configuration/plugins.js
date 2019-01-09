/* eslint-disable import/no-extraneous-dependencies */
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import WebpackNotifierPlugin from 'webpack-notifier';

const isProduction = process.env.NODE_ENV === 'production';

const plugins = [
  new HtmlWebpackPlugin({
    title: 'Codejobs',
    template: './src/index.html',
    filename: './index.html',
  }),
];

if (isProduction) {
  plugins.push(
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
      chunkFilename: './css/[id].css',
    }),
  );
} else {
  plugins.push(
    new BundleAnalyzerPlugin(),
    new WebpackNotifierPlugin(),
  );
}

export default plugins;
