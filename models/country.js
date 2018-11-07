'use strict';
module.exports = (sequelize, DataTypes) => {
  var Country = sequelize.define('Country', {
      id: { type: DataTypes.INTEGER(11), autoIncrement: true,  primaryKey: true},
      Country: DataTypes.STRING(80),
      CountryCode: DataTypes.STRING(3),
      phonecode: DataTypes.INTEGER(3)
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'tblcountrymaster'
    }
  );

  return Country;
};
