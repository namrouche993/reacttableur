const apiUrl = 'http://localhost:5000'; // Replace with your actual server URL

// Function to encrypt data on the server
export async function encryptOnServer(data) {
  const response = await fetch(`${apiUrl}/encrypt`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  });

  const result = await response.json();
  return result.encryptedData;
}

// Function to decrypt data on the server
export async function decryptOnServer(encryptedData) {
  const response = await fetch(`${apiUrl}/decrypt`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ encryptedData }),
  });

  const result = await response.json();
  return result.decryptedData;
}
