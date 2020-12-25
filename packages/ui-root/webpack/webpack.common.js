
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
      // alias: utils.mapTypescriptAliasToWebpackAlias()
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
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-react'],
          },
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
      },
      runtimeChunk: false
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        "process.env": {
          PUBLIC_URL: env.MODE !== 'production' ? `http://${env.HOST || 'localhost'}:${env.PORT}/` : env.PUBLIC_URL,
        }
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
      new ModuleFederationPlugin({
        name: 'uiRoot',
        library: { type: 'var', name: 'uiRoot' },
        filename: 'uiRoot.js',
        remotes: {
          uiViewImages: 'uiViewImages',
          // uiTest: 'uiTest',
          // app2: 'app2',
        },
        // shared: {
        //   // "react": { singleton: true, requiredVersion: "^16.14.0" },
        //   "react": { singleton: true },
        //   "react-dom": { singleton: true },
        //   "redux": { singleton: true },
        //   "react-redux": { singleton: true },
        //   "redux-thunk": { singleton: true },
        // },
        // shared: {
        //   "@material-ui/core": { singleton: true },
        //   "@material-ui/icons": { singleton: true },
        //   "@material-ui/lab": { singleton: true },
        //   "@types/jws": { singleton: true },
        //   "@types/lodash": { singleton: true },
        //   "@types/node": { singleton: true },
        //   "@types/react": { singleton: true },
        //   "@types/react-dom": { singleton: true },
        //   "@types/react-redux-i18n": { singleton: true },
        //   "@types/react-router": { singleton: true },
        //   "@types/react-router-dom": { singleton: true },
        //   "@types/react-redux": { singleton: true },
        //   "dexie": { singleton: true },
        //   "lodash": { singleton: true },
        //   "react": { singleton: true },
        //   "react-dom": { singleton: true },
        //   "react-redux": { singleton: true },
        //   "react-redux-i18n": { singleton: true },
        //   "react-redux-loading-bar": { singleton: true },
        //   "react-router": { singleton: true },
        //   "react-router-dom": { singleton: true },
        //   "redux-thunk": { singleton: true },
        //   "redux": { singleton: true },
        //   "clsx": { singleton: true }
        // }
        // shared: [
        //   "@material-ui/core",
        //   "@material-ui/icons",
        //   "@material-ui/lab",
        //   "@types/jws",
        //   "@types/lodash",
        //   "@types/node",
        //   "@types/react",
        //   "@types/react-dom",
        //   "@types/react-redux-i18n",
        //   "@types/react-router",
        //   "@types/react-router-dom",
        //   "@types/react-redux",
        //   "dexie",
        //   "lodash",
        //   "react",
        //   "react-dom",
        //   "react-redux",
        //   "react-redux-i18n",
        //   "react-redux-loading-bar",
        //   "react-router",
        //   "react-router-dom",
        //   "redux-thunk",
        //   "redux",
        //   "clsx"
        // ]
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: './public/company_logo.png', to: 'company_logo.png' },
          { from: './public/background-sign-in.jpg', to: 'background-sign-in.jpg' },
          { from: './public/manifest.json', to: 'manifest.json' },
          { from: './public/robots.txt', to: 'robots.txt' },
        ],
      })
    ]
  }
}
