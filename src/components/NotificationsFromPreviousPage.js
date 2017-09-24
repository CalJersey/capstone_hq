import { Component } from 'react';
import {notify} from 'react-notify-toast';

class NotificationsFromPreviousPage extends Component {
  constructor(){
    super()
    this.state = {
      toastMessages : global.config.LSCtrl.getUserRedirectMessages(),
      showNotificationsFromPreviousPage : false
    }
  }
  componentDidMount() {
    if (this.toastMessages){
      this.showNotificationsFromPreviousPage = true;
    }
  }
  render(){
    let showNotifications = this.showNotificationsFromPreviousPage || false;
    if(showNotifications){
      return(
        notify.show(this.toastMessages[0],this.toastMessages[1])
      )
    }else{
    return null
    }
  }
}

export default NotificationsFromPreviousPage
