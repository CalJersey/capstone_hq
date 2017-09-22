const path = require('path');

module.exports = function(config) {
  webpackConfig = {
  headers: {
    "Access-Control-Allow-Origin":'*',
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
   }
  }
}
