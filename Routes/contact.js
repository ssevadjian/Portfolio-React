const router = require('express').Router();
const homeRoute = require('./index');
const portfolioRoute = require('./portfolio');

router.use('/portfolio', portfolioRoute);
router.use('/contact', homeRoute);

module.exports = router;