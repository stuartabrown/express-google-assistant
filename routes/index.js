var express = require('express');
var router = express.Router();
const {
  dialogflow,
  Permission,
  Suggestions,
  BasicCard,
} = require('actions-on-google');

// Instantiate the Dialogflow client.
const googleApp = dialogflow({debug: true});


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // Handle the Dialogflow intent named 'favorite color'.
// The intent collects a parameter named 'color'.
googleApp.intent('favorite color', (conv, {color}) => {
    const luckyNumber = color.length;
    // Respond with the user's lucky number and end the conversation.
    conv.close('Your lucky number is ' + luckyNumber);
  });
});

router.get('/ga', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('WOOTS');
});

module.exports = router;
