
export default isProd => {
  const js = ['react-hot-loader', 'babel-loader']
  let loaders = [
    { test: /\.jsx?$/, loaders: js, exclude: /node_modules/ }
  ]
  return loaders
}
