import io from 'socket.io-client';
import  secureLocalStorage  from  "react-secure-storage";

export const socket = io('http://localhost:5000',{
    transports: ['websocket'],
    withCredentials: true, // Include cookies in the Socket.IO connection  
//withCredentials: true,
query: {
    username: secureLocalStorage.getItem('ussd74kasd75_2')
  }
}
) // Replace with your server URL
