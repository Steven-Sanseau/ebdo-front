const path = require('path')
const express = require('express')
const compression = require('compression')
const sslRedirect = require('heroku-ssl-redirect')

module.exports = function addProdMiddlewares(app, options) {
  const publicPath = options.publicPath || '/'
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'build')

  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets). You can read more about that technique
  // and other good practices on official Express.js docs http://mxs.is/googmy
  app.use(compression())
  app.use(publicPath, express.static(outputPath, { maxage: 86400000 }))

  // Force SSL on production
  app.use(sslRedirect())

  app.get('*', (req, res) => {
    res.set('Cache-Control', 'public, max-age=3600')
    res.sendFile(path.resolve(outputPath, 'index.html'))
  })
}
