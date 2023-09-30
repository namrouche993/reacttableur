export async function fetchDataUsEffect1(randstr,dataaf) {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
         method: 'POST',
         credentials: 'include',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({"idusername":randstr,"dataa": dataaf })//data_localstorage})
       });
 
       if (response.ok) {
         console.log('Data sent successfully to the server.');
         //const datajj = await response.json();
         //localStorage.setItem('token', datajj.token);
         //return datajj.token; // Return the JWT token

       } else {
         console.error('Error sending data to the server.');
       }
     } catch (error) {
       console.error('Error:', error);
     }
}
