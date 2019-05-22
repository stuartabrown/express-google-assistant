var express = require('express');
var router = express.Router();

// Import the Dialogflow module and response creation dependencies from the
// Actions on Google client library.
const {
  dialogflow,
  Permission,
  Suggestions,
  BasicCard,
} = require('actions-on-google');

// Instantiate the Dialogflow client.
const googleApp = dialogflow({debug: true});

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
