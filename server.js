// // server.js

// const express = require('express');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');

// // Load environment variables
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware to parse JSON
// app.use(bodyParser.json());

// // In-memory product data
// let products = [
//   {
//     id: '1',
//     name: 'Laptop',
//     description: 'High-performance laptop with 16GB RAM',
//     price: 1200,
//     category: 'electronics',
//     inStock: true
//   },
//   {
//     id: '2',
//     name: 'Smartphone',
//     description: 'Latest model with 128GB storage',
//     price: 800,
//     category: 'electronics',
//     inStock: true
//   },
//   {
//     id: '3',
//     name: 'Coffee Maker',
//     description: 'Programmable coffee maker with timer',
//     price: 50,
//     category: 'kitchen',
//     inStock: false
//   }
// ];

// // Root route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Product API!');
// });

// // Products route (initially just GET all)
// app.get('/api/products', (req, res) => {
//   res.json(products);
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const productRoutes = require('./routes/products');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Logger
app.use(logger); 

// Routes
app.use('/api/products', productRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API!');
});

// Error Handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});