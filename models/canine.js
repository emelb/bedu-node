const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('canines', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, notEmpty: true },
  weight: { type: DataTypes.INTEGER, notEmpty: true },
  human: { type: DataTypes.INTEGER, notEmpty: true },
  age: { type: DataTypes.INTEGER, notEmpty: false },
  breed: { type: DataTypes.STRING, notEmpty: false },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});