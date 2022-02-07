var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express running in K8s!' });
});

router.get('/message', function(req, res, next) {
  res.send({
    "message":"success",
    "question":"what kind of bear is best?"
  })
});

module.exports = router;
