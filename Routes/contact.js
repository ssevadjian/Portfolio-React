const router = require('express').Router();
const homeRoute = require('./index');
const portfolioRoute = require('./portfolio');
const aboutMeRoute = require('./aboutMe');

router.use('/portfolio', portfolioRoute);
router.use('/index', homeRoute);
router.use('/aboutme', aboutMeRoute);

module.exports = router;