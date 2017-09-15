global.sessionController = {

  isAuthenticated: function(){
    return  getSessionKey('ACCESS_TOKEN') ? true : false
  },

  setUserSession: function (token, id, email) {
    setSessionKey('ACCESS_TOKEN',token);
    setSessionKey('userId',id);
  },

  destroyUserSession: function(){
    sessionStorage.clear();
  },

  getSessionKey: function(key){
    return sessionStorage[key];
  },

  setSessionKey: function(key,val){
    sessionStorage[key] = val;
    return true;
  }

}
