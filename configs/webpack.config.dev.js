/*
 * 开发环境配置
 * @Author: 56 
 * @Date: 2018-08-21 23:31:49 
 * @Last Modified by: 56
 * @Last Modified time: 2018-08-26 15:43:05
 */
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

const BaseConfig = require('./webpack.config.base')

module.exports = merge(BaseConfig, {
  // 输出配置
  devtool: 'cheap-module-eval-source-map',

  // loader加载器相关
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },

  // 插件相关
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(), // 热加载
    new HtmlWebpackPlugin({
      filename: 'index.html', // 输出名
      template: 'src/index.pug', // html模板
      alwaysWriteToDisk: true,
      inject: true,
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],

  // 开发服务器
  devServer: {
    progress: true, // 进度显示
    contentBase: './dist', // 本地服务器所加载的页面所在的目录
    port: 8080, // 端口号
    inline: true, // 实时刷新
    hot: true, // 开启热更新
    open: true, // 打开页面
    historyApiFallback: true, // 不跳转
    // proxy: {}, // 做路径映射

    // 设置 watch 属性
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
})
