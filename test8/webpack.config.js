const path = require('path');

module.exports = {
  mode: 'development',  // "development" | "production" | "none"
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
  // optimization: {
  //   usedExports: false
  // }
};
