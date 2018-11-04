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
  }
};
