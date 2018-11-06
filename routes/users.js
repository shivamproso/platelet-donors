var express = require('express');
var router = express.Router();
var controller = require('../controller.js')

/**
* Get user data for given user id
*/
router.get('/:id', function(req, res, next) {
  res.send(controller.getUserWithId(req.params.id))
});

module.exports = router;
