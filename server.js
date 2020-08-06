const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use('/images', express.static(path.resolve(__dirname, './images')));

app.get('/style.css', (req, res) => {
  res.sendFile(path.resolve(__dirname, './style.css'));
});

app.use('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
