const path = require('path')
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development'
const GLOBAL_CSS_REGEXP = /\.global\.scss$/
const {HotModuleReplacementPlugin} = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom'
    }
  },
  entry: [
    path.resolve(__dirname, '../src/client/index.jsx'),
    'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'
  ],
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: "client.js",
    publicPath: "/static/"
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          },
          'sass-loader',
        ],
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: IS_DEV ? 'eval' : false,
  plugins: IS_DEV ? [
      new CleanWebpackPlugin(),
      new HotModuleReplacementPlugin()
    ]
    : []
}