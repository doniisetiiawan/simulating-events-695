/* eslint-disable import/no-extraneous-dependencies */
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const isDevelopment = process.env.NODE_ENV !== 'production';

export default (type) => {
  const rules = [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
  ];

  if (!isDevelopment || type === 'server') {
    rules.push({
      test: /\.scss/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
            sourceMap: true,
          },
        },
        {
          loader: 'sass-loader',
        },
      ],
    });
  } else {
    rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
            sourceMap: true,
          },
        },
        {
          loader: 'sass-loader',
        },
      ],
    });
  }

  return {
    rules,
  };
};
