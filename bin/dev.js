const webpack = require('webpack')
const webpackConfig = require('../webpack.config')
const compiler = webpack(webpackConfig)
const nodemon = require('nodemon')
const path = require('path')

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