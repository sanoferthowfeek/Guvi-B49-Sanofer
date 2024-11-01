const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

const data = JSON.parse(fs.readFileSync('data.json'));

app.get('/api/vehicle-location', (req, res) => {
  const currentIndex = Math.floor((Date.now() / 5000) % data.length);
  res.json(data[currentIndex]);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
