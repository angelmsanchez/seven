const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.ts']
  },
  entry: {
    polyfills: './src/polyfills.ts',
    main: './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular-router-loader'
        ]
      },
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.scss$/,
        loader: ['raw-loader', 'sass-loader?sourceMap']
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
        },
      },
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body'
    }),

    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)fesm5/,
      path.resolve(__dirname, 'src'), {}
    ),
    new FilterWarningsPlugin({
      exclude: /System.import/
    })
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  }
};
