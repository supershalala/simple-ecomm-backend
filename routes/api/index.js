const router = require('express').Router();

const productRoutes = require('./products');
const categoryRoutes = require('./categories');
const tagRoutes = require('./tags');

router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/tags', tagRoutes);

router.get('/test', (req, res) => {
    res.json({ message: 'Test route is working!' });
  });

module.exports = router;
