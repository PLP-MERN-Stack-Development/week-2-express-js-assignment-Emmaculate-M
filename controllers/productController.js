const { v4: uuidv4 } = require('uuid');
const { NotFoundError, ValidationError } = require('../utils/errors');
const products = require('../data/products'); // Shared product list

// GET /api/products
const getAllProducts = (req, res, next) => {
  try {
    const { category, page = 1, limit = 10, search } = req.query;

    let result = [...products];

    if (category) {
      result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (search) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    const start = (page - 1) * limit;
    const end = start + parseInt(limit);
    const paginated = result.slice(start, end);

    res.json({
      page: parseInt(page),
      limit: parseInt(limit),
      total: result.length,
      products: paginated
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/products/:id
const getProductById = (req, res, next) => {
  try {
    const product = products.find(p => p.id === req.params.id);
    if (!product) throw new NotFoundError('Product not found');
    res.json(product);
  } catch (err) {
    next(err);
  }
};

// POST /api/products
const createProduct = (req, res, next) => {
  try {
    const { name, description, price, category, inStock } = req.body;

    if (!name || !description || price == null || !category || inStock == null) {
      throw new ValidationError('All fields are required');
    }

    const newProduct = {
      id: uuidv4(),
      name,
      description,
      price,
      category,
      inStock
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};

// PUT /api/products/:id
const updateProduct = (req, res, next) => {
  try {
    const { name, description, price, category, inStock } = req.body;
    const product = products.find(p => p.id === req.params.id);

    if (!product) throw new NotFoundError('Product not found');

    if (!name || !description || price == null || !category || inStock == null) {
      throw new ValidationError('All fields are required');
    }

    product.name = name;
    product.description = description;
    product.price = price;
    product.category = category;
    product.inStock = inStock;

    res.json(product);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/products/:id
const deleteProduct = (req, res, next) => {
  try {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index === -1) throw new NotFoundError('Product not found');

    const deleted = products.splice(index, 1);
    res.json({ message: 'Product deleted', deleted: deleted[0] });
  } catch (err) {
    next(err);
  }
};

// GET /api/products/stats
const getProductStats = (req, res, next) => {
  try {
    const stats = {};

    for (const product of products) {
      const category = product.category;
      stats[category] = (stats[category] || 0) + 1;
    }

    res.status(200).json({
      totalProducts: products.length,
      countByCategory: stats
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductStats
};
