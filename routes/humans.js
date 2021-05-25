const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission');

// Get all humans
router.get('/', permission('admin', 'client'), async (req, res) => {
  const humans = await sequelize.models.humans.findAndCountAll();
  return res.status(200).json({ data: humans });
});

// Create a new human
router.post('/', permission('admin'), async (req, res) => {
  const { body } = req;
  const human = await sequelize.models.humans.create({
    name: body.name,
    phone: body.phone,
    email: body.email,
    social: body.social,
    address: body.address,
  });
  await human.save();
  return res.status(201).json({ data: human })
});

// Update a human by id
router.put('/:id', permission('admin'), async (req, res) => {
  const { body, params: { id } } = req;
  const human = await sequelize.models.humans.findByPk(id);
  if (!human) {
    return res.status(404).json({ code: 404, message: 'Dog not found' });
  }
  const updatedHuman = await human.update({
    name: body.name,
    phone: body.phone,
    email: body.email,
    social: body.social,
    address: body.address,
  });
  return res.json({ data: updatedHuman });
});

// Delete a human by id
router.delete('/:id', permission('admin'), async (req, res) => {
  const { params: { id } } = req;
  const human = await sequelize.models.humans.findByPk(id);
  if (!human) {
    return res.status(404).json({ code: 404, message: 'Dog not found' });
  }
  await human.destroy();
  return res.json();
});

module.exports = router;