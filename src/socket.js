import io from 'socket.io-client';
import  secureLocalStorage  from  "react-secure-storage";

const mynamespace0 = secureLocalStorage.getItem('hisownroute')
if(!mynamespace0){
  var mynamespace = mynamespace0;
} else {
  var mynamespace = mynamespace0.toString().replace('tab/','');
}
//console.log('mynamespace')
//console.log(mynamespace)

//export const socket = io('http://localhost:5000',{
export const socket = io(`http://localhost:5000`,{
    transports: ['websocket'],
    withCredentials: true, // Include cookies in the Socket.IO connection  
    
//withCredentials: true,
query: {
    username: secureLocalStorage.getItem('ussd74kasd75_2'),
    email:secureLocalStorage.getItem('email_chosen'),
    email_to_display:secureLocalStorage.getItem('email_chosen_to_display'),
    namespace0:mynamespace
  }
}
) // Replace with your server URL
//socket.emit('join', mynamespace);

//socket.emit('joinRoom', mynamespace);