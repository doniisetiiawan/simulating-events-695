export default {
  splitChunks: {
    cacheGroups: {
      default: false,
      commons: {
        name: 'vendor',
        test: /[\\/]node_modules[\\/]/,
        chunks: 'all',
      },
    },
  },
};
