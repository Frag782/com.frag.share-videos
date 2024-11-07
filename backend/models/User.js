const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const User = sequelize.define(
    'User',
    {
        username: { type: DataTypes.STRING, allowNull: false, unique: true },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        password: { type: DataTypes.STRING, allowNull: false }
    },
    { 
        timestamps: false, 
        tableName: 'users'
    }
);

module.exports = User;