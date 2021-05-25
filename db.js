const { Sequelize } = require('sequelize');

// Importing models
const Product = require('./models/product');
const Review = require('./models/review');
const User = require('./models/user');
const Canine = require('./models/canine');
const Humans = require('./models/human');

// Database connection
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DIALECT,
  logging: false,
});

// Getting models
const models = [
  Product,
  Review,
  User,
  Canine,
  Humans,
];

// Registering models into Sequelize
for (let model of models) {
  model(sequelize);
}

// sequelize.sync({ force: true })
//     .then(() => console.log("Tablas creadas"));

// Configuring relations
const { products, reviews, canines, humans } = sequelize.models;
reviews.belongsTo(products); // Relation one-to-one in reviews table

module.exports = sequelize;