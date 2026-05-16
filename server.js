const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// API route to get the project name
app.get('/api/project-name', (req, res) => {
  res.json({ name: 'hermes_01' });
});

// Serve static files from the Vue.js app build
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Fallback to index.html for client-side routing
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
