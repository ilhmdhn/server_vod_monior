const {DataTypes} = require('sequelize');
const sqlz = require('../util/sequelize');

module.exports = sqlz.define('MasterFile',{
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
        tableName: 'master_file',
        timestamps: false
    });
