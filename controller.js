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
  * creates api log from req body by taking paramters from it
  * @function setApi
  * @param {String} userid The userid (primary key) to get a user.
  * @return {json} status and an object in json format
  */
  setApi:function(req,res){
    var param = req.body;
    if(Object.keys(param).length == 0 && param.constructor === Object)
    {
/* This is just a dummy JSON object which will be passed as
 * a parameter when the request body is empty
 * It's just for naive testing(POSTMAN) and will be deleted in near future when not needed
 */
      param =  {
      caller: "Shreyansh",
      bloodgroup: "A+",
      stdcode: "022",
      pincode:"400706",
      apicode:"w1hbr3br4",
      donorfound:1,
      donormobile:'8767903336',
      ipaddress:'127.0.0.1',
      remarks:"good"
    };
    }
    models.apilog.create(
      param
   ).then(function(log){
      res.status(201).json({
        status:'success',
        data:log
      });
    })
    .catch(function(err) {
      res.status(500).json({
        status:'error',
        data: err
      });
    })
  }


};
