const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = (env) => merge(commonConfig(env), {
  devtool: 'cheap-module-source-map',
  entry: './src/bootstrap.js',
  // entry: [path.join(__dirname, "../src", "bootstrap.js")],
  mode: env.MODE,
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    port: env.PORT,
    https: false,
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
    chunkFilename: '[name].[hash].js',
    publicPath: '/'
    // publicPath: `http://${env.HOST}:${env.PORT}/`
  }
})

