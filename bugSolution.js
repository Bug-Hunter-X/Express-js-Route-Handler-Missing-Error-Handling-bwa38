const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  try {
    // Validate userId or perform database lookup
    if (!userId || isNaN(parseInt(userId))) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }
    // ... (rest of your code)
  } catch (error) {
    console.error('Error handling user request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});