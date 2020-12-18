const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const utils = require('./utils.js');

module.exports = (env) => merge(commonConfig(env), {
  entry: './src/index',
  mode: env.MODE,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        PUBLIC_URL: env.PUBLIC_URL || "/",
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
  ]
})

