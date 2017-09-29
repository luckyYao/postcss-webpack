var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: {
    'index': path.resolve(__dirname, 'js/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dest'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "postcss-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("index.css")
  ]
}