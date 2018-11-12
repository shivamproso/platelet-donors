'use strict';
module.exports = (sequelize,DataTypes) => {

	var Apilog = sequelize.define('apilog',{
		rowid: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			primaryKey: true
		},
		caller: DataTypes.STRING(10),
		bloodgroup: DataTypes.STRING(8),
		stdcode: DataTypes.STRING(6),
		pincode: DataTypes.STRING(6),
		apicode:{
			type: DataTypes.STRING(10),
			allowNull:false
		},
		donorfound:{
			type: 'TINYINT(1)',
			allowNull:false
		},
		donormobile: DataTypes.STRING(10),
		ipaddress: DataTypes.STRING(15),
		ts:{
			type:'TIMESTAMP',
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			allowNull:false,
		},
		remarks: DataTypes.STRING(200)
	},
	{
		timestamps:false,
		freezeTableName:true,
		tableName: 'tblapilog'

	});

	return Apilog;

};