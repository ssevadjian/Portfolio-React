const router = require('express').Router();
const homeRoute = require('./index');
const portfolioRoute = require('./portfolio');
const contactRoute = require('./contact');

router.use('/contact', contactRoute);
router.use('/portfolio', portfolioRoute);
router.use('/index', homeRoute);

module.exports = router;