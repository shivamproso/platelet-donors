var express = require('express');
var router = express.Router();
var users = require('../db/models/user.js')

/**
* Get user data for given user id
*/
router.get('/:id', function(req, res, next) {
  res.send(users.getUserWithId(req.params.id))
});

module.exports = router;
