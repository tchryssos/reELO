const express = require('express')
const bodyParser = require('body-parser')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')

const app = express()

const compiler = webpack(webpackConfig)

app.use(express.static(__dirname + '/www'))

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}))

const port = process.env.PORT || 3000
const server = app.listen(port, function() {
  const host = server.address().address
  const port = server.address().port
  console.log('reELO listening at http://%s:%s', host, port)
})
