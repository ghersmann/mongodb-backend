const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // To parse incoming JSON data

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Simple route for testing
app.get('/', (req, res) => {
  res.send('API is working');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');

// Use routes
app.use('/api', userRoutes);
app.use('/api', eventRoutes);
