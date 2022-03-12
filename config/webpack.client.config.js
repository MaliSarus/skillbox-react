const path = require('path')
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development'
const { HotModuleReplacementPlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
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
      }
    ]
  },
  plugins: IS_DEV ? [
    new HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  ]
  : [],
  devtool: IS_DEV ? 'eval' : false
}