const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('humans', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, notEmpty: true },
  phone: { type: DataTypes.STRING, notEmpty: true },
  email: { type: DataTypes.STRING, isEmail: true, notEmpty: false },
  social: { type: DataTypes.STRING, notEmpty: false },
  address: { type: DataTypes.TEXT, notEmpty: true },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});