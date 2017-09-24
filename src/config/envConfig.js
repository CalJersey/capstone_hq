//key : "value";
console.log("APIURL=",process.env.API_URL)
const api_url ='https://capstone-back.mybluemix.net/';
//

let envConfig = {
  lbApiUrl: api_url + 'api/'
}

module.exports = envConfig
