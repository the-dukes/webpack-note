var path = require('path')

// node内置模块 - path: https://nodejs.org/dist/latest-v12.x/docs/api/path.html
// __dirname：所有情况下，都表示当前运行的js文件所在的目录，它是一个绝对路径。
// path.resolve()  拼接返回绝对路径。

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js', //属性名：chunk的名称， 属性值：入口模块（启动模块）
    a: ['./src/a.js', './src/index.js'] //启动模块有两个
  },
  output: {
    path: path.resolve(__dirname, 'target'), //必须配置一个绝对路径，表示资源放置的文件夹，默认是dist
    filename: '[id].[chunkhash:5].js' //配置的合并的js文件的规则
  },
  devtool: 'source-map'
}
