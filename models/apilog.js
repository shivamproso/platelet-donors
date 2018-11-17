'use strict';
module.exports = (sequelize,DataTypes) => {

	var Apilog = sequelize.define('apilog',{
		rowid: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			primaryKey: true
		},
		caller:{
			type:DataTypes.STRING(10),
			validate:{
				len:{
					args:[4,10],
					msg:"String length should be in between 4 to 10 characters!"
				}
			}
		},		
		bloodgroup:{
            type:DataTypes.STRING(8),
            validate:{
            		len:{
					args:[2,8],
					msg:"String length should be in between 2 to 8 characters!"
				}
            }
		}, 
		stdcode: {
			type:DataTypes.STRING(6),
			validate:{
				isNumeric:{
					msg: "Incorrect Stdcode Format!"
				}
			}
		},
		pincode:{
			type:DataTypes.STRING(6),
			validate:{
				isNumeric:{
					msg: "Incorrect Pincode Format!"
				}
			}
		},
		apicode:{
			type: DataTypes.STRING(10),
			allowNull:false,

		},
		donorfound:{
			type: 'TINYINT(1)',
			allowNull:false,
		},
		donormobile:{
			type: DataTypes.STRING(10),
			validate:{
				isNumeric:{
					msg: "Incorrect Mobile Number Format! "
				}			
			}
		},
		
		ipaddress: {
			type:DataTypes.STRING(15),
			validate:{
				isIP:{
                   msg:"Invalid IP address format!"
				}
				
			}
		},
		ts:{
			type:'TIMESTAMP',
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			allowNull:false,
		},
		remarks:{
			type:DataTypes.STRING(200),
			validate:{
				len:[4,200]
			}
		} 
	},
	{
		timestamps:false,
		freezeTableName:true,
		tableName: 'tblapilog'

	});

	return Apilog;

};