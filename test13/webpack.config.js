const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',  // "development" | "production" | "none"
  entry: './src/index.js',
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        title: 'shimming'
    }),
    // 如果你遇到了至少一处用到 _ 变量的模块实例，
    // 那请你将 lodash package 包引入进来，并将其提供给需要用到它的模块
    new webpack.ProvidePlugin({
        _: 'lodash'
        // 这样就能很好的与 tree shaking 配合，将 lodash 库中的其他没用到的部分去除
        // join: ['lodash', 'join']
    })
  ],
  module: {
    rules: [
      {
        // 通过使用 imports-loader 覆写 this
        test: require.resolve('./src/index.js'),
        use: 'imports-loader?this=>window'
      }
    ]
  },
  output: {
    filename: '[hash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
