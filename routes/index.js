var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/junior', function(req, res, next) {
  res.render('junior', { title: 'Express' });
});

router.get('/senior', function(req, res, next) {
  res.render('senior', { title: 'Express' });
});

module.exports = router;
