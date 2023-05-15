const express = require('express');
const { Tag } = require('../../models'); 

const router = express.Router();

// GET route for all tags
router.get('/tags', (req, res) => {
  Tag.findAll()
    .then(tags => res.json(tags))
    .catch(err => res.status(500).json(err));
});

// GET route for a single tag
router.get('/tags/:id', (req, res) => {
  Tag.findByPk(req.params.id)
    .then(tag => {
      if (!tag) {
        res.status(404).json({ message: 'No tag found with this id!' });
        return;
      }
      res.json(tag);
    })
    .catch(err => res.status(500).json(err));
});

// POST route for a new tag
router.post('/tags', (req, res) => {
  /* req.body should look like this...
    {
      "tag_name": "red"
    }
  */
  Tag.create(req.body)
    .then(tag => res.json(tag))
    .catch(err => res.status(500).json(err));
});

// DELETE route for a tag
router.delete('/tags/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(tag => {
      if (!tag) {
        res.status(404).json({ message: 'No tag found with this id!' });
        return;
      }
      res.json(tag);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
