'use strict';

module.exports = (sequelize,DataTypes) =>{
    var News  = sequelize.define('News',{

        RecId:{
            type: DataTypes.INTEGER(11),
            autoIncrement:true,
            primaryKey:true
        },
        title:{
            type: DataTypes.STRING(5000), 
            allowNull:false,
            validate:{
               len:{
                   args:[4,5000],
                   msg:["String Length should be more than 4 characters!"]
               }
            }         
        },
        Linkimg:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        Created:{
            type:DataTypes.DATE,
            allowNull:false,
            validate:{
                isDate:{
                    args:true,
                    msg:"Date Input should be in the valid format! "
                }                
            }          
        },
        Updated:{
            type:DataTypes.DATE,
            allowNull:false,
            validate: {
                isDate: {
                    args: true,
                    msg: "Date Input should be in the valid format! "
                }

            } 
        },
        Is_active:{
           type: DataTypes.ENUM('Y','N'),
           allowNull:false,
           validate:{
               isIn:
               {
                   args:[['Y','N']],
                   msg:"Value should be either Y or N!"
               }
           }
        }
    },
    {
        timestamps:false,
        freezeTableName:true,
        tableName:'tblnews'

    });

    return News;
}

