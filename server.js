// server.js
const express = require('express');
const app = express();
app.use(express.json());

app.post('/danger-alert', (req, res) => {
  console.log("🚨 DANGER ALERT RECEIVED!");
  // You can trigger SMS, Email, or other alerts here
  res.status(200).json({ status: "Alert received" });
});

app.get('/', (req, res) => {
  res.send('Server is live');
});

app.listen(3000, () => console.log('Server running on port 3000'));
