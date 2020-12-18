const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = (env) => merge(commonConfig(env), {
  devtool: 'cheap-module-source-map',
  entry: './src/index',
  mode: env.MODE,
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    port: env.PORT,
    https: env.tls,
    hot: true,
    disableHostCheck: true,
    open: true,
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/,
      poll: 1000
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  }
})

