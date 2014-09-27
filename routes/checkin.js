var express = require('express'),
	router = express.Router(),
	checkin = require('../checkin-manager');

router.get('/', function(req, res) {
  
});

router.post('/', function(req, res) {
  res.send(checkin.add(req.param('code')));
});

router.get('/list', function(req, res) {
  res.send( JSON.stringify(checkin.list()) );
});

module.exports = router;
