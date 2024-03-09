require('dotenv');
const {Sequelize} = require('sequelize');
const { createNamespace } = require('cls-hooked');

const namespace = createNamespace('ns');
Sequelize.useCLS(namespace);

const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: console.log,
    database: process.env.DB_database,
    username: process.env.DB_username,
    password: process.env.DB_password,
    timezone: '+00:00',
    define: {
        timestamps: false
    }
});

module.exports = {namespace, sequelize};