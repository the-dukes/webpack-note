const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'target'),
    filename: 'scripts/[name].[chunkhash:5].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    port: 8000,
    open: true,
    proxy: {
      //代理规则
      '/api': {
        target: 'http://open.duyiedu.com',
        changeOrigin: true //更改请求头中的host和origin
      }
    }
  },
  stats: {
    modules: false,
    colors: true
  }
}
