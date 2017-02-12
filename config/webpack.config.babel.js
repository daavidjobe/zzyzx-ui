import validator from 'webpack-validator'
import paths from './paths'
import plugins from './plugins'
import loaders from './loaders'

const isProd = process.argv.indexOf('-p') !== -1

export default () => {
  const config = {
    context: paths.root,
    entry: {
      app: paths.main,
    },
    output: {
      path: paths.dist,
      filename: '[name].bundle.js',
      publicPath: paths.publicPath
    },
    module: { loaders: loaders(isProd) },
    plugins: plugins(isProd)
  }
  if (!isProd) {
    config.devtool = 'eval'
  }
  return validator(config)
}
