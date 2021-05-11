var express = require('express');
var router = express.Router();
const categories = require('../data/category');
const category_24 = require('../models/categoryModel_24');
//const db =require('../utils/database');
const category = require('../models/categoryModel_24');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_24', { 
    title: '洪嘉濠 407220424 (static)',
    data: categories,
});
});


router.get('/homepage',async function(req, res, next) {
  let data;
  const[rows] = await category_24.fetchAll();
  data=rows;
  //res.json(data)
  res.render('crown2_24', { 
    title: '洪嘉濠 407220424(async/await)',
    data
});
});
module.exports = router;
