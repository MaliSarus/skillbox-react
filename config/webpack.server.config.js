const path = require('path')
const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\.scss$/
const express = require('express')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
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
  externals: [
    nodeExternals()
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.[jt]sx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
                exportOnlyLocals: true
              },
            }
          },
          'sass-loader'
        ],
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ['css-loader']
      }
    ]
  },
  optimization: {
    minimize: false
  }
}

module.exports = config