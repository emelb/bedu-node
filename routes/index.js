const express = require('express');
const router = express.Router();

const authenticate = require('../middlewares/authentication');

// Add the required routes
router.use('/auth', require('./auth'));
router.use('/products', authenticate, require('./products'));
router.use('/reviews', require('./reviews'));
router.use('/users', require('./users'));
router.use('/canines', authenticate, require('./canines'));
router.use('/humans', authenticate, require('./humans'));

module.exports = router;