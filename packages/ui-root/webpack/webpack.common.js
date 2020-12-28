
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
          // options: {
          //   presets: [
          //     '@babel/preset-react',
          //     '@babel/preset-typescript',
          //     '@babel/preset-env'
          //   ]
          // }
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
        // exposes: {
        // './ViewImagePage': './src/views/page/linh-loi',
        // },
        remotes: {
          uiAppTest: 'uiAppTest'
        },
        shared: {
          "@material-ui/core": { singleton: true },
          "@material-ui/icons": { singleton: true },
          "@material-ui/lab": { singleton: true },
          "@types/lodash": { singleton: true },
          "@types/node": { singleton: true },
          "@types/react": { singleton: true },
          "@types/react-dom": { singleton: true },
          "@types/react-redux-i18n": { singleton: true },
          "@types/react-router": { singleton: true },
          "@types/react-router-dom": { singleton: true },
          "@types/react-redux": { singleton: true },
          "dexie": { singleton: true },
          "lodash": { singleton: true },
          "react": { singleton: true, requiredVersion: "^16" },
          "react-dom": { singleton: true, requiredVersion: "^16" },
          "redux": { singleton: true, requiredVersion: "^4" },
          "react-redux": { singleton: true, requiredVersion: "^7" },
          "react-redux-i18n": { singleton: true, requiredVersion: "^1" },
          "react-redux-loading-bar": { singleton: true },
          "react-router": { singleton: true },
          "react-router-dom": { singleton: true, requiredVersion: "^5" },
          "redux-thunk": { singleton: true },
          "clsx": { singleton: true }
        }
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
