const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.PG_DATABASE,
    process.env.PG_USER,
    process.env.PG_PASS,
    { host: process.env.DB_HOST, dialect: 'postgres' }
);

module.exports = sequelize;