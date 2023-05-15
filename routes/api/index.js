const router = require('express').Router();

const productRoutes = require('./products');
const categoryRoutes = require('./categories');
const tagRoutes = require('./tags');

router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
