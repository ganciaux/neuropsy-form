const asyncHandler = require('express-async-handler');
const Goals = require('../models/goalsModel');

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goals.find();

  res.status(200).json(goals);
});

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add text');
  }

  const goal = await Goals.create({ text: req.body.text });

  res.status(200).json(goal);
});

const updateGoal = asyncHandler(async (req, res) => {
  const goal = Goals.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  const updatedGoal = await Goals.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goals.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  await Goals.deleteOne({ id: req.params.id });

  res.status(200).json(goal);
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
