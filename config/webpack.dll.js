import webpack from 'webpack'
import config from './config'

const { paths } = config
const webpackDllConfig = { module: {} }

webpackDllConfig.entry = {
  vendor: config.compilerVendor,
}

webpackDllConfig.output = {
  path: paths.dll(),
  filename: 'dll.[name].js',
  library: '[name]_[hash]',
}

webpackDllConfig.plugins = [
  new webpack.DllPlugin({
    path: paths.base('dll', '[name]-mainfest.json'),
    name: '[name]_[hash]',
  }),
]

export default webpackDllConfig
