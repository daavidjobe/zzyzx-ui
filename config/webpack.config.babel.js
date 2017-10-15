import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import _ from 'lodash'

import config from './config'

const { paths } = config
const { DEV, PROD } = config.compilerGlobals

const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: config.compilerDevtool,
  externals: {},
  module: {
    noParse: [],
    rules: [],
  },
  plugins: [],
  resolve: {
    modules: [
      paths.base(),
      'node_modules',
    ],
  },
  alias: {
    'zzyzx-ui': paths.src('index.js'),
  },
}

const webpackHotPath = `${config.compilerPublicPath}__webpack_hmr`
const webpackHotMiddlewareEntry = `webpack-hot-middleware/client?${_.map({
  path: webpackHotPath,
  timeout: 2000,
  overlay: true,
  reload: true,
  noInfo: false,
  quit: false,
}, (value, key) => `&${key}=${value}`).join('')}`

const ENTRY = paths.docsSrc('index.js')

webpackConfig.entry = DEV ? {
  app: [
    'react-hot-loader/patch',
    webpackHotMiddlewareEntry,
    ENTRY,
  ],
  vendor: [
    webpackHotMiddlewareEntry,
    ...config.compilerVendor,
  ],
} : {
  app: ENTRY,
  vendor: config.compilerVendor,
}

webpackConfig.output = {
  ...webpackConfig.output,
  filename: `[name].[${config.compilerHashType}].js`,
  path: config.compilerOutputPath,
  pathinfo: true,
  publicPath: config.compilerPublicPath,
}

webpackConfig.plugins = [
  ...webpackConfig.plugins,
  new webpack.DefinePlugin(config.compilerGlobals),
  new webpack.DllReferencePlugin({
    context: paths.base('node_modules'),
    mainfest: require(paths.base('dll/vendor-mainfest.json')),
  }),
  new HtmlWebpackPlugin({
    template: 'index.ejs',
    filename: 'index.html',
    hash: false,
    inject: 'body',
    minify: {
      collapseWhitespace: true,
    },
    title: 'zzyzx-ui docs',
    versions: {
      react: require('react/package.json').version,
      reactDom: require('react-dom/package.json').version,
      zzyzxUi: require('../package.json').version,
    },
  }),
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor'],
  }),
]

if (DEV) {
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  )
}

if (PROD) {
  webpackConfig.plugins.push(
    new webpack.optimize.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      unused: true,
      dead_code: true,
      warnings: false,
    }),
  )
}

const jsLoaders = [
  {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
    },
  },
]

if (DEV) {
  jsLoaders.unshift('react-hot-loader/webpack')
}

webpackConfig.module.rules = [
  ...webpackConfig.module.rules, {
    test: /\.js$/,
    exclude: /node_modules/,
    use: jsLoaders,
  },
]

export default webpackConfig
