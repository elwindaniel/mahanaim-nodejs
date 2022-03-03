const express = require('express');
const router = new express.Router();

router.use('/auth', require('./auth.routes'));
router.use('/user', require('./user.routes'));
router.use('/event', require('./events.routes'));
router.use('/sermon', require('./sermon.routes'));

module.exports = router; 