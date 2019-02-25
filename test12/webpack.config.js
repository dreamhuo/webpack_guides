
var path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-numbers.js',
        // 对于用途广泛的 library，我们希望它能够兼容不同的环境，例如 CommonJS，AMD，Node.js
        // 或者作为一个全局变量。为了让你的 library 能够在各种用户环境(consumption)中可用，
        // 需要在 output 中添加 library 属性
        library: 'webpackNumbers',
        // 当你在 import 引入模块时，这可以将你的 library bundle 暴露为名为 webpackNumbers 的全局变量。
        // 为了让 library 和其他环境兼容，还需要在配置文件中添加 libraryTarget 属性。
        // 这是可以控制 library 如何以不同方式暴露的选项。
        // 遍历：作为一个全局变量，通过 script 标签来访问（libraryTarget:'var'）。
        // this：通过 this 对象访问（libraryTarget:'this'）。
        // window：通过 window 对象访问，在浏览器中（libraryTarget:'window'）。
        // UMD：在 AMD 或 CommonJS 的 require 之后可访问（libraryTarget:'umd'）
        // 如果设置了 library 但没设置 libraryTarget，则 libraryTarget 默认为 var
        libraryTarget: 'umd'
    },
    // 这意味着你的 library 需要一个名为 lodash 的依赖，这个依赖在用户的环境中必须存在且可用。
    // 如果你计划只是将 library 用作另一个 webpack bundle 中的依赖模块，则可以将 externals 指定为数组。
    // externals防止将某些 import 的包(package)打包到 bundle 中
    // string array object function regex
    externals: {
        lodash: {
            commonjs: 'lodash',      // commonjs：可以将 library 作为一个 CommonJS 模块访问
            commonjs2: 'lodash',     // commonjs2：和上面的类似，但导出的是 module.exports.default
            amd: 'lodash',           // amd：类似于 commonjs，但使用 AMD 模块系统
            root: '_'                // root：可以通过一个全局变量访问 library
        }
    }
}
