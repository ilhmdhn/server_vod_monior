const {DataTypes} = require('sequelize');
const sqlz = require('../util/sequelize')

module.exports = () =>{
    return sqlz.define('LastUpload',{
        outlet:{
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        last_upload:{
            type: DataTypes.DATE
        },
        version:{
            type: DataTypes.STRING
        }
    },{
        freezeTableName: true,
        timestamps: false
    });
}