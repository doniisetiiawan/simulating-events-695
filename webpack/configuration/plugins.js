import HtmlWebpackPlugin from 'html-webpack-plugin';

const plugins = [
  new HtmlWebpackPlugin({
    title: 'Codejobs',
    template: './src/index.html',
    filename: './index.html',
  }),
];

export default plugins;
