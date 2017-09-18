let localStorageController = {

  getLocalStorageKey: function(key){
    return localStorage[key];
  },

  setLocalStorageKey: function(key,val){
    localStorage[key] = val;
    return true;
  },

  setUserRedirectMessages: function (message, type) {
    let val = JSON.stringify([message,type])
    this.setLocalStorageKey('errorsToDisplayOnRedirect',val);
  },

  getUserRedirectMessages: function () {
    let retVal = localStorage['errorsToDisplayOnRedirect'];
    if (retVal) {
      retVal = JSON.parse(retVal)
      this.clearUserRedirectMessages()
      return retVal
    }
    return false
  },

  clearUserRedirectMessages: function(){
    localStorage.removeItem('errorsToDisplayOnRedirect')
  },

  destroyUserLocalStorage: function(){
    localStorage.clear();
  }
};

module.exports = localStorageController
