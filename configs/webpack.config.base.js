/*
 * 通用配置
 * @Author: 56
 * @Date: 2018-08-22 18:39:53
 * @Last Modified by: 56
 * @Last Modified time: 2018-08-26 21:30:00
 */
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const getPath = p => path.join(__dirname, '..', p)

module.exports = {
  // 主入口
  entry: getPath('src/index.js'),

  // 输出路径
  output: {
    path: getPath('dist'), // 文件输出路径
    filename: 'assets/[name].js', // 输出文件名
    publicPath: '/', // 静态资源输出路径
  },

  // 相关loader
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: getPath('src'),
        use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        include: getPath('src'),
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'eslint-loader',
            options: {
              formatter: require('eslint-friendly-formatter'), // 默认的错误提示方式
            },
          },
        ],
        enforce: 'pre', // 编译前检查
        exclude: [/node_modules/, /configs/],
      },
      {
        test: /\.pug$/,
        // pug 加载器
        loader: 'pug-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        // 图片加载器 配置图片到img文件夹中
        // 其中 8KB以下的图片转成base64
        loader: 'url-loader?limit=8192&name=assets/[name].[ext]',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        // 字体加载 处理文件
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
    ],
  },

  // 插件相关
  plugins: [new CleanWebpackPlugin('dist', { exclude: ['index.html'] })],
}
