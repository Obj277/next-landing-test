const withFonts = require('nextjs-fonts');

module.exports = withFonts({
  webpack: config => config,
  exportTrailingSlash: false,
  exportPathMap: () => ({
    '/': {page: '/'},
    '/bridge': {page: '/bridge'},
  })
});