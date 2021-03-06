var models = require('./models')

module.exports = {

  /**
  * Return user object for given user id
  * @function getUserWithId
  * @param {String} userid The userid (primary key) to get a user.
  * @return {json}         User object in json format
  */
  getUserWithId: function(userid){
    var user = {
      "id": userid,
      "name": "John Doe"
    };
    return user;
  },

  getCountryForCode: function(code, res){
    models.Country.findAll({
      where: {
        CountryCode: code
      }
    }).then(countries => {
      res(countries);
    });
  },


/**
  * creates api log by taking JSON object as input from HTTP request body
  * @function createApiLog
  * @param {JSON} req: request body from HTTP request 
  * @param {JSON} res: response body from HTTP request 
  * @return {json} JSON object showing success or failure and status of the request 
  * and the data returned from the request
  */
  createApiLog:function(req,res){
    models.apilog.create(
    req.body
      
   
   ).then(function(log){
      res.status(201).json({
        status:'success',
        data:log
      });
    })
    .catch(function(err) {
      res.status(400).json({
        status:'Error:Bad Request',
        data: err
      });
    })
  }


};
