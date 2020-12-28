const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = (env) => merge(commonConfig(env), {
  entry: './src/bootstrap.js',
  mode: env.MODE,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    // publicPath: '/'
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

