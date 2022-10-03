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
  module: {
    rules: [
      {
        test: /\.(png)|(gif)|(jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'imgs/[name].[hash:5].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  stats: {
    modules: false,
    colors: true
  }
}
