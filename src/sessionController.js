global.sessionController = {

  getSessionKey: function(key){
    return sessionStorage[key];
  },

  setSessionKey: function(key,val){
    sessionStorage[key] = val;
    return true;
  },

  isAuthenticated: function(){
    return  this.getSessionKey('ACCESS_TOKEN') ? true : false
  },

  setUserSession: function (token, id, email) {
    this.setSessionKey('ACCESS_TOKEN',token);
    this.setSessionKey('userId',id);
  },

  destroyUserSession: function(){
    sessionStorage.clear();
  }

}
