const path = require('path')
const NODE_ENV = process.env.NODE_ENV;
const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
  target: "node",
  mode: NODE_ENV ? NODE_ENV : 'development',
  resolve: {
    extensions: ['.js','.jsx','.ts','.tsx', '.json']
  },
  entry: path.resolve(__dirname,'../src/server/server.js'),
  output: {
    path: path.resolve(__dirname,'../dist/server'),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: ['ts-loader']
      }
    ]
  },
  watch: true,
  plugins: [
    new NodemonPlugin({
      watch: [path.resolve(__dirname, '../dist/server'), path.resolve(__dirname, '../dist/client')]
    }),
  ],
  externals: [
    nodeExternals()
  ],
  optimization: {
    minimize: false
  }
}