const webpack = require('webpack')
const npmCfg = require('../package.json')

var banner = [
  'v-waterfall-lazy.js v' + npmCfg.version,
  '(c) ' + (new Date().getFullYear()) + ' ' + npmCfg.author,
  npmCfg.homepage
].join('\n')

module.exports = {
  entry: './src',
  output: {
    path: './dist',
    filename: 'v-waterfall-lazy.js',
    library: 'VWaterfallLazy',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
    ]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ]
}