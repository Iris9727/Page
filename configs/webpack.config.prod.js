/*
 * 生产环境配置
 * @Author: 56
 * @Date: 2018-08-21 23:31:49
 * @Last Modified by: 56
 * @Last Modified time: 2018-08-26 21:42:53
 */
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const BaseConfig = require('./webpack.config.base')

module.exports = merge(BaseConfig, {
  // 输出配置
  devtool: 'source-map', // 生成单独 sourcemap

  // loader加载器相关
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },

  // 插件配置
  plugins: [
    new webpack.BannerPlugin('56的代码'),
    new OptimizeCSSAssetsPlugin({}),
    new MiniCssExtractPlugin({ filename: 'assets/[name].css' }),
    new UglifyJsPlugin({ cache: true, extractComments: true }), // js代码压缩
    new HtmlWebpackPlugin({
      filename: 'index.html', // 输出的html名
      template: 'src/index.pug', // 指定的html模板
      inject: true,
      minify: {
        removeComments: true, // 移除注释
        collapseWhitespace: true, // 删除空白
        removeAttributeQuotes: true, // 删除属性引号
      },
    }), // 生成html
  ],
})
