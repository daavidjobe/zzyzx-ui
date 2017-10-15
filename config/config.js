import { resolve } from 'path'

// Environment variables

const env = process.env.NODE_ENV || 'development'

const DEV = env === 'development'
const PROD = env === 'production'


const envConfig = {
  env,
  base: resolve(__dirname, '..'),
  dirSrc: '../src',
  dirDist: '../dist',
  dirDocsSrc: '../docs/src',
  dirDocsDist: '../docs/dist',
  dirDll: '../dll',
}

const base = (...args) => resolve(...[envConfig.base, ...args])

const paths = {
  base,
  src: base.bind(null, envConfig.dirSrc),
  dist: base.bind(null, envConfig.dirDist),
  docsSrc: base.bind(null, envConfig.dirDocsSrc),
  docsDist: base.bind(null, envConfig.dirDocsDist),
  dll: base.bind(null, envConfig.dirDll),
}

const config = {
  ...envConfig,
  paths,

  serverHost: 'localhost',
  serverPort: process.env.PORT || 3000,

  compilerDevtool: DEV && 'cheap-source-map',
  compilerGlobals: {
    'process.env': {
      NODE_ENV: JSON.stringify(env),
    },
    DEV,
    PROD,
  },

  compilerHashType: PROD ? 'chunkhash' : 'hash',
  compilerFailOnWarning: PROD,
  compilerOutputPath: paths.base(envConfig.dirDocsDist),
  compilerPublicPath: '/',
  compilerStats: {
    hash: false,
    version: false,
    assets: true,
    chunks: false,
    colors: true,
    chunkModules: false,
    modules: false,
    cached: false,
    reasons: false,
    source: false,
    errorDetails: true,
    chunkOrigins: false,
    modulesSort: '',
    chunksSort: '',
    assetsSort: '',
  },
  compilerVendor: [
    'react', 'react-dom',
  ],
}

export default config
