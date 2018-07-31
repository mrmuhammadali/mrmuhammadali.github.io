// libs
const { getLoader } = require('react-app-rewired')

function addOptionsToCssLoader(array, options) {
  const cssLoader = array.find(
    ({ loader }) => loader && loader.includes('/css-loader')
  )
  cssLoader.options = { ...cssLoader.options, ...options }
}

/* config-overrides.js */
module.exports = function override(config, env) {
  const cssLoaderOptions = {
    modules: true,
    localIdentName: '[name]--[local]--[hash:base64:3]'
  }
  const cssRules = getLoader(
    config.module.rules,
    rule => String(rule.test) === String(/\.css$/)
  )

  if (env === 'production') {
    addOptionsToCssLoader(cssRules.loader, cssLoaderOptions)
  } else {
    addOptionsToCssLoader(cssRules.use, cssLoaderOptions)
  }

  return config
}
