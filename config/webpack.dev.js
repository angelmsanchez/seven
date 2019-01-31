'use strict';

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const helpers = require('./helpers');
const jsonServer = require('json-server');

module.exports = webpackMerge(commonConfig, {
  mode: 'development',

  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },

  optimization: {
    noEmitOnErrors: true
  },

  module: {
    rules: [{
      test: /\.ts$/,
      loaders: [
        'babel-loader',
        {
          loader: 'awesome-typescript-loader',
          options: {
            configFileName: helpers.root('tsconfig.json')
          }
        },
        'angular2-template-loader',
        'angular-router-loader'
      ],
      exclude: [/node_modules/]
    }]
  },

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    port: 3000,
    setup: function (app) {
      app.use('/api', jsonServer.router('db.json'));
    },
  }
});
