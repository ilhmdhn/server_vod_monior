const { Sequelize } = require('sequelize');
require('dotenv').config();

module.exports = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_SERVER,
    logging: (msg) => {
        if (msg.includes('ERROR')) {
            logger.error(msg);
        }
    },
    dialect: 'mysql',
    dialectOptions: {
        connectTimeout: 3000,
        timezone: '+07:00',
    },
    timezone: '+07:00',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});