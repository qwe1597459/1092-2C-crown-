var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_24', { title: '洪嘉濠 407220424' });
});

module.exports = router;
