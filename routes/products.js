// const express = require('express');
// const router = express.Router();
// const {
//   getAllProducts,
//   getProductById,
//   createProduct,
//   updateProduct,
//   deleteProduct
// } = require('../controllers/productController');

// router.get('/', getAllProducts);
// router.get('/:id', getProductById);
// router.post('/', createProduct);
// router.put('/:id', updateProduct);
// router.delete('/:id', deleteProduct);

// module.exports = router;


const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductStats
} = require('../controllers/productController');

const auth = require('../middleware/auth');
const validateProduct = require('../middleware/validateProduct');

// Apply auth to all routes
router.use(auth);

// Routes
router.get('/', getAllProducts);
router.get('/stats', getProductStats);
router.get('/:id', getProductById);
router.post('/', validateProduct, createProduct);
router.put('/:id', validateProduct, updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
