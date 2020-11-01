const router = require('express').Router();
const contactRoute = require('./contact');
const portfolioRoute = require('./portfolio');
const aboutMeRoute = require('./aboutMe');

router.use('/portfolio', portfolioRoute);
router.use('/contact', contactRoute);
router.use('/aboutme', aboutMeRoute);

module.exports = router;
