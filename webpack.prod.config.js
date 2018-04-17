const path = require('path')

module.exports = {
  mode: 'production',
  output: {
    filename: 'react-boom-store.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'reactBoomStore',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  externals: {
    react: 'react'
  },
  optimization: {
    minimize: false
  }
}
