const express = require('express');

const router = express.Router();

// @route   GET api for profile
// @desc    Test route
// @access  public

router.get ('/', (req, res) => res.send ('Profile route'));

module.exports = router;