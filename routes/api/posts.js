const express = require('express');

const router = express.Router();

// @route   GET api for posts
// @desc    Test route
// @access  public

router.get('/', (req,res) => res.send ('Posts Route'));

module.exports = router;    