const router = require('express').Router();
const contactRoute = require('./contact');
const portfolioRoute = require('./portfolio');

router.use('/portfolio', portfolioRoute);
router.use('/contact', contactRoute);

module.exports = router;
