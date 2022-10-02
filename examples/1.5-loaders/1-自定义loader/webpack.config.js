module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /index\.js$/, //正则表达式，匹配模块的路径
        use: ['./loaders/test-loader'] //匹配到了之后，使用哪些加载器
      }
    ] //模块的匹配规则
  }
}
