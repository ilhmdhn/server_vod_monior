const {DataTypes} = require('sequelize');
const sqlz = require('../util/sequelize')

module.exports = () =>{
    return sqlz.define('DetailFile',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        outlet:{
            type: DataTypes.STRING
        },
        file_name:{
            type: DataTypes.STRING
        },
        date_modified:{
            type: DataTypes.DATE
        },
        room_no:{
            type: DataTypes.STRING
        },
        status:{
            type: DataTypes.TINYINT
        },
        service:{
            type: DataTypes.TINYINT
        },
        checkout:{
            type: DataTypes.TINYINT
        },
        extend:{
            type: DataTypes.TINYINT
        },
        ready:{
            type: DataTypes.TINYINT
        },
        delay:{
            type: DataTypes.TINYINT
        },
        service_time:{
            type: DataTypes.TIME
        },
        room_open_time:{
            type: DataTypes.DATE
        },
        room_close_time:{
            type: DataTypes.DATE
        }
    },{
        tableName:'detail_file',
        timestamps: false
    });
}