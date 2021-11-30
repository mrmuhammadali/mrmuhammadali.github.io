const smoothscroll = require("smoothscroll-polyfill");
require("./src/styles/global.css");

exports.onClientEntry = function () {
  smoothscroll.polyfill();
};
