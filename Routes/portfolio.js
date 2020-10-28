const router = require('express').Router();
const contactRoute = require('./contact');
const indexRoute = require('./index');
import 'materialize-css';
import { Card, Row, Col } from 'react-materialize';

router.use('/index', indexRoute);
router.use('/contact', contactRoute);

module.exports = router;