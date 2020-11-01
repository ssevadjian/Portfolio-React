const router = require('express').Router();
const contactRoute = require('./contact');
const indexRoute = require('./index');
const aboutMeRoute = require('./aboutMe');

router.use('/index', indexRoute);
router.use('/contact', contactRoute);
router.use('/aboutme', aboutMeRoute);

module.exports = router;