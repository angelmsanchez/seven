'use strict';

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const isDev = process.env.NODE_ENV !== 'production';
console.log('isDev: ' + isDev);

module.exports = {
  entry: {
    vendor: './src/vendor.ts',
    polyfills: './src/polyfills.ts',
    main: isDev ? './src/main.ts' : './src/main.aot.ts'
  },

  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@app/core': path.resolve(__dirname, "../src/app/core")
    }
  },

  module: {
    rules: [{
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'to-string-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
        include: helpers.root('src', 'app')
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(
      helpers.root('dist'), {
        root: helpers.root(),
        verbose: true
      }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)fesm5/,
      path.resolve(__dirname, 'src'), {}
    ),
    new FilterWarningsPlugin({
      exclude: /System.import/
    }),
  ]
};
