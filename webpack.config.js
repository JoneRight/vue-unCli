const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const isDev = process.env.NODE_ENV === 'development'

//__dirname表示文件相对于工程的路径
module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    //make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new HTMLPlugin(),
  ],
  mode: 'none',
  // resolve: {
  //   //配置解析模块路径别名：优点:简写路径 缺点:路径没有提示
  //   alias: {
  //     '@src': path.resolve('src'),
  //     '@component': path.resolve('src/component'),
  //     '@views': path.resolve('src/views'),
  //     '@utils': path.resolve('src/utils'),
  //   },
  // },
  module: {
    rules: [
      {
        //通过vue-loader来识别以vue结尾的文件
        test: /.vue$/,
        loader: 'vue-loader',
      },
      {
        //通过style-loader来识别以css结尾的文件
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        //通过style-loader来识别以css结尾的文件
        test: /.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
      {
        //处理图片文件
        test: /\.(gif|jpg|jepg|png|svg|)$/,
        use: [{ loader: 'url-loader', options: { limit: 102400 } }],
      },
    ],
  },
}
if (isDev) {
  config.devServer = {
    port: 8000,
    port: '0.0.0.0',
    overlay: {
      errors: true,
    },
  }
}
