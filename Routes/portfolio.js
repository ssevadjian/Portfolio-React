const router = require('express').Router();
const contactRoute = require('./contact');
const indexRoute = require('./index');

router.use('/index', indexRoute);
router.use('/contact', contactRoute);

module.exports = router;