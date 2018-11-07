'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    id: { type: DataTypes.INTEGER, autoIncrement: true,  primaryKey: true}
  });

  return User;
};
