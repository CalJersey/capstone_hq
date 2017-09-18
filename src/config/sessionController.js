let sessionController = {

  sessionKey: function(key){
    return sessionStorage[key];
  },

  setSessionKey: function(key,val){
    sessionStorage[key] = val;
    return true;
  },

  isAuthenticated: function(){
    return this.sessionKey('ACCESS_TOKEN') ? true : false
  },

  setUserSession: function (token, id) {
    this.setSessionKey('ACCESS_TOKEN',token);
    this.setSessionKey('userId',id);
  },

  destroyUserSession: function(){
    sessionStorage.clear();
  }
}

module.exports = sessionController
