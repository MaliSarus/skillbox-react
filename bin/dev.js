const webpack = require('webpack')
const [clientConfig, serverConfig] = require('../webpack.config')
const compiler = webpack(serverConfig)
const nodemon = require('nodemon')
const path = require('path')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const express = require('express')
const hmrServer = express()
const clientCompiler = webpack(clientConfig)

hmrServer.use(webpackDevMiddleware(clientCompiler,{
  publicPath: clientConfig.output.publicPath,
  serverSideRender: true,
  noInfo: true,
  watchOptions: {
    ignore: '/dist/'
  },
  writeToDisk: true,
  stats: 'errors-only'
}))

hmrServer.use(webpackHotMiddleware(clientCompiler,{
  path: '/static/__webpack_hmr',
}))

hmrServer.listen(3001, () => {
  console.log('HMR Started')
})

compiler.run((err) => {
  if (err){
    console.log('Compile failed: ', err)
  }
  compiler.watch({},(err)=>{
    if (err){
      console.log('Compile failed: ', err)
    }
  })
  nodemon({
    script: path.resolve(__dirname,'../dist/server/server.js'),
    watch: [
      path.resolve(__dirname,'../dist/server'),
      path.resolve(__dirname,'../dist/client')
    ]
  })
})