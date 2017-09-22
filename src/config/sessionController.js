let sessionController = {

  sessionKey: function(key){
    return sessionStorage[key];
  },

  setSessionKey: function(key,val){
    sessionStorage[key] = val;
    return true;
  },

///ALTERED TO WORK AROUND CORS ISSUE
  isAuthenticated: function(){
    this.setUserSession('1212sde',1)
    return true
    // this.sessionKey('ACCESS_TOKEN') ? true : false
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
