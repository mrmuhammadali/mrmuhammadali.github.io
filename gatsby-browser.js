var smoothscroll = require('smoothscroll-polyfill')

exports.onClientEntry = function() {
  smoothscroll.polyfill()
}
