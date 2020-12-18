const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const utils = require('./utils.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = webpack.container;

module.exports = env => {
  return {
    cache: env.MODE !== 'production',
    resolve: {
      extensions: [
        '.js', '.jsx', '.ts', '.tsx', '.json'
      ],
      modules: ['node_modules'],
      alias: utils.mapTypescriptAliasToWebpackAlias()
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-typescript',
              '@babel/preset-env'
            ]
          }
        },
        {
          test: /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i,
          loader: 'file-loader',
          options: {
            digest: 'hex',
            hash: 'sha512',
            name: 'public/[hash].[ext]'
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
              },
            },
            "postcss-loader",
            'sass-loader'
          ]
        }
      ]
    },
    stats: {
      children: false
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        chunksSortMode: 'auto',
        inject: 'body',
        base: '/',
      }),
      new ModuleFederationPlugin({
        name: 'uiComponent',
        library: { type: 'var', name: 'uiComponent' },
        filename: 'uiComponent.js',
        exposes: {
          // expose each component you want 
          './alert': './src/components/alert',
          './backdrop': './src/components/backdrop',
          './error': './src/components/error',
          './layout': './src/components/layout',
          './signin': './src/components/signin',
          './signin-expiration-time': './src/components/signin-expiration-time',
          './system-assignment': './src/components/system-assignment',
        },
        shared: ['react', 'react-dom']
      })
    ]
  }
}
