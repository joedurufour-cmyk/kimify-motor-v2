const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', version: '3.0.0', service: 'kimify-motor-v3' });
});

app.get('/api/characters', (req, res) => {
  res.json(require('./data/characters.json'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`KIMIFY MOTOR v3.0 running on port ${PORT}`);
});