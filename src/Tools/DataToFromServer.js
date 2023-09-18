export const saveDataToServer = (data) => {
    fetch('http://localhost:5000/api/saveData', {  // editable url
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Data saved successfully:', data);
    })
    .catch(error => {
      console.error('Error saving data:', error);
    });
  };