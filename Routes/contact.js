const router = require('express').Router();
const indexRoute = require('./index');
const portfolioRoute = require('./portfolio');

router.use('/portfolio', portfolioRoute);
router.use('/contact', indexRoute);

module.exports = router;