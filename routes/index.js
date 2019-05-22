var express = require('express');
var router = express.Router();

//import controllers
const googleController = require('../controllers/googleController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express stu' });
});

router.get('/ga',
  googleController.hello
);

module.exports = router;
