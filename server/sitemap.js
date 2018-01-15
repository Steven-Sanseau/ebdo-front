const sm = require('sitemap')
const sitemap = sm.createSitemap({
  hostname: process.env.EBDO_FRONT_URL || 'http://localhost:3000/',
  cacheTime: 3600, // 600 sec cache period
  urls: [
    { url: '/', changefreq: 'daily', priority: 1 },
    { url: '/abonnement', changefreq: 'monthly', priority: 0.9 },
    { url: '/equipe', priority: 0.9 },
    { url: '/manifeste', priority: 0.9 },
    { url: '/source', priority: 0.9 },
    { url: '/connexion' },
    { url: '/essai' },
    { url: '/mentions-legales' },
    { url: '/cgv' }
  ]
})

module.exports = sitemap
