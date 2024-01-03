const {DataTypes} = require('sequelize');
const sqlz = require('../util/sequelize');

module.exports = () =>{
    return sqlz.define('MasterFile',{
        outlet:{
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        file_name:{
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        date_modified:{
            type: DataTypes.DATE
        }
    },{
        freezeTableName: true,
        timestamps: false
    });
}