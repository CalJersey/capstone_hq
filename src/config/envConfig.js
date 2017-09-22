//key : "value";
const api_url = process.env.API_URL || 'localhost:3000/';

let envConfig = {
  lbApiUrl: api_url + 'api/'
}

module.exports = envConfig
