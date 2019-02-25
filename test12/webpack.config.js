
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-numbers.js'
    },
    // 这意味着你的 library 需要一个名为 lodash 的依赖，这个依赖在用户的环境中必须存在且可用。
    // 如果你计划只是将 library 用作另一个 webpack bundle 中的依赖模块，则可以将 externals 指定为数组。
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    }
}
