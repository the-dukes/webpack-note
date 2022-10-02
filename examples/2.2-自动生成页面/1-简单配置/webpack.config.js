const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'target'),
    filename: '[name].[chunkhash:5].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/template.html',
      filename: 'a.html'
    })
  ]
}
