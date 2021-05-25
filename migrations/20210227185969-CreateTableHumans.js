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

     await queryInterface.createTable('humans', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, notEmpty: true },
      phone: { type: DataTypes.STRING, notEmpty: true },
      email: { type: DataTypes.STRING, isEmail: true, notEmpty: false },
      social: { type: DataTypes.STRING, notEmpty: false },
      address: { type: DataTypes.TEXT, notEmpty: true },
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
    await queryInterface.dropTable('humans');
  }
};
