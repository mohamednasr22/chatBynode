var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/newcustomer', function(req, res, next) {
  res.render('newcustomer', { title: 'newcustomer' });
});


module.exports = router;
