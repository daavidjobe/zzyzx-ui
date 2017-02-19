import { resolve } from 'path'

module.exports = () => {
  const config = {
    context: resolve('src'),
    entry: [
      'build.js'
    ],
    output: {

    },
    module: {
      loader: [
      ]
    }
  }
  return config
}
