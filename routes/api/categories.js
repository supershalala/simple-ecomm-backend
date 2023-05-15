const express = require('express');
const { Category } = require('../../models');

const router = express.Router();

// GET route for all categories
router.get('/categories', (req, res) => {
  Category.findAll()
    .then(categories => res.json(categories))
    .catch(err => res.status(500).json(err));
});

// GET route for a single category
router.get('/categories/:id', (req, res) => {
  Category.findByPk(req.params.id)
    .then(category => {
      if (!category) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
      res.json(category);
    })
    .catch(err => res.status(500).json(err));
});

// POST route for a new category
router.post('/categories', (req, res) => {
  /* req.body should look like this...
    {
      "category_name": "Electronics"
    }
  */
  Category.create(req.body)
    .then(category => res.json(category))
    .catch(err => res.status(500).json(err));
});

// DELETE route for a category
router.delete('/categories/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(category => {
      if (!category) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
      res.json(category);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
