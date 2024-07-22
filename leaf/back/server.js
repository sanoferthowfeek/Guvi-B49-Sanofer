const express = require('express');
const app = express();
const port = 3000;

// Dummy data
const vehicleData = require('./vehicleData.json');

// Endpoint to get vehicle location data
app.get('/api/vehicle-location', (req, res) => {
  res.json(vehicleData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
