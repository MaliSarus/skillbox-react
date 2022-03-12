const path = require('path')
const NODE_ENV = process.env.NODE_ENV;
const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')
const express = require('express')
const hmrServer = express();
const webpackDevMiddleWare = require('webpack-dev-middleware')
const webpackHotMiddleWare = require('webpack-hot-middleware')
const configures = require('../webpack.config')
const webpack = require('webpack')
const config = {
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

const clientCompiler = webpack(config);

hmrServer.use(webpackDevMiddleWare(configures.clientCompiler,{
  publicPath: clientConfig.output.publicPath,
  serverSideRender: true,
  writeToDisk: true,
  stats: 'errors-only',
}))

hmrServer.use(webpackHotMiddleWare(configures.clientCompiler, {
  path: '/static/__webpack_hmr',
}))

hmrServer.listen(3001, () => {
  console.log('HMR Started')
})
module.exports = config