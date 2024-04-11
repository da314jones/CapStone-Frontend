const ws = new WebSocket(impor.meta.env.VITE_API_URL); // Adjust the URL as needed

ws.onopen = () => {
  console.log('WebSocket connection established');
  // Optionally, send the archive ID to the server
  ws.send(JSON.stringify({ archive_id }));
};

ws.onmessage = (e) => {
  const data = JSON.parse(e.data);
  console.log('Update from server:', data);
  // Handle the update (e.g., update UI with the progress)
};

ws.onerror = (error) => {
  console.error('WebSocket error:', error);
};


