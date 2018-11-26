const withCss = require("@zeit/next-css")

module.exports = withCss({
  cssModules: true,
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
})

