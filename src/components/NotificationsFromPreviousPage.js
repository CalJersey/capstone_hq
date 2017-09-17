import { Component } from 'react';
import {notify} from 'react-notify-toast';

class NotificationsFromPreviousPage extends Component {
  componentDidMount() {
    let toastMessages = global.localStorageController.getUserRedirectMessages();
    if (toastMessages){
      notify.show(toastMessages[0],toastMessages[1]);
    }
  }
  render(){
    return null
  }
}

export default NotificationsFromPreviousPage
