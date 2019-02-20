const path = require('path');

module.exports = {
  mode: 'development',  // "development" | "production" | "none"
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};
