const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission');

// Get all canines
router.get('/', permission('admin', 'client'), async (req, res) => {
  const canines = await sequelize.models.canines.findAndCountAll();
  return res.status(200).json({ data: canines });
});

// Get a canine by human id
router.get('/human/:id', permission('admin'), async (req, res) => {
  const id = req.params.id;
  const canines = await sequelize.models.canines.findAll({where: {human: id}});
  return res.status(200).json({ data: canines });
});

// Create a new canine
router.post('/', permission('admin'), async (req, res) => {
  const { body } = req;
  const human = await sequelize.models.humans.findByPk(body.human);
  if (human){
    const canine = await sequelize.models.canines.create({
      name: body.name,
      weight: body.weight,
      human: body.human,
      age: body.age,
      breed: body.breed,
    });
    await canine.save();
    return res.status(201).json({ data: canine })
  }
  else{
    return res.status(500).json({ data: {error:"human not found"} })
  }
  
});

// Update a canine by id
router.put('/:id', permission('admin'), async (req, res) => {
  const { body, params: { id } } = req;
  const canine = await sequelize.models.canines.findByPk(id);
  if (!canine) {
    return res.status(404).json({ code: 404, message: 'Dog not found' });
  }
  const updatedCanine = await canine.update({
    name: body.name,
    weight: body.weight,
    human: body.human,
    age: body.age,
    breed: body.breed
  });
  return res.json({ data: updatedCanine });
});

// Delete a canine by id
router.delete('/:id', permission('admin'), async (req, res) => {
  const { params: { id } } = req;
  const canine = await sequelize.models.canines.findByPk(id);
  if (!canine) {
    return res.status(404).json({ code: 404, message: 'Dog not found' });
  }
  await canine.destroy();
  return res.json();
});

module.exports = router;