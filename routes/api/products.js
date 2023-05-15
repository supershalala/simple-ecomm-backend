const express = require('express');
const { Product } = require('./models'); // Adjust this require statement as needed for your setup

const router = express.Router();

// GET route for all products
router.get('/products', (req, res) => {
  Product.findAll()
    .then(products => res.json(products))
    .catch(err => res.status(500).json(err));
});

// GET route for a single product
router.get('/products/:id', (req, res) => {
  Product.findByPk(req.params.id)
    .then(product => {
      if (!product) {
        res.status(404).json({ message: 'No product found with this id!' });
        return;
      }
      res.json(product);
    })
    .catch(err => res.status(500).json(err));
});

// POST route for a new product
router.post('/products', (req, res) => {
  /* req.body should look like this...
    {
      "product_name": "Basketball",
      "price": "200.00",
      "stock": "3",
      "category_id": "2"
    }
  */
  Product.create(req.body)
    .then(product => res.json(product))
    .catch(err => res.status(500).json(err));
});

// DELETE route for a product
router.delete('/products/:id', (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(product => {
      if (!product) {
        res.status(404).json({ message: 'No product found with this id!' });
        return;
      }
      res.json(product);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
