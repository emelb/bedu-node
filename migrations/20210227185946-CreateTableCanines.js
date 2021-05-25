const { DataTypes } = require('sequelize');
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.createTable('canines', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, notEmpty: true },
      weight: { type: DataTypes.INTEGER, notEmpty: true },
      human: { type: DataTypes.INTEGER, notEmpty: true },
      age: { type: DataTypes.INTEGER, notEmpty: false },
      breed: { type: DataTypes.STRING, notEmpty: false },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
     });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('canines');
  }
};
