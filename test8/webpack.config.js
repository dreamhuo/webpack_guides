const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',  // "development" | "production" | "none"
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  // plugins: [
  //   new CleanWebpackPlugin(['dist']),
  //   new HtmlWebpackPlugin({
  //       title: '代码分离'
  //   })
  // ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
