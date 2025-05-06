const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 4000;

dotenv.config();

const app = express();

// Middleware
const allowedOrigin = 'https://sparkstemacademy.onrender.com'; 

app.use(cors({
  origin: allowedOrigin,
  credentials: true // if using cookies or auth headers
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const userRoutes = require('./routes/userRoutes');
const paymentRoutes = require('./routes/payment');

app.use('/api/user', userRoutes);
app.use('/api/payment', paymentRoutes);

// Home Route
app.get('/', (req, res) => {
  res.send('Welcome to the Spark Stem Academy API!');
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB connected successfully');
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
});

