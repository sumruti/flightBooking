const webpack = require('webpack');
const path = require('path');
// React v.16 uses some newer JS functionality, so to ensure everything
// works across all browsers, we're adding babel-polyfill here.
//require('babel-polyfill');

module.exports = {
  entry: [
    './index'
  ],
  module: {
    loaders: [
      { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' },
    ]
  },
  resolve: {
    modules: [
      path.resolve('./'),
      path.resolve('./node_modules'),
    ],
    extensions: ['.js','.scss'],
  },
  output: {
    path: path.join(__dirname, '/Dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './Dist',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
