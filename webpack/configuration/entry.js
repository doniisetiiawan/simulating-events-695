const isProduction = process.env.NODE_ENV === 'production';
const entry = [];

if (!isProduction) {
  entry.push(
    'webpack-hot-middleware/client?reload=true',
    './src/index.jsx',
  );
} else {
  entry.push('./src/index.jsx');
}

export default entry;
