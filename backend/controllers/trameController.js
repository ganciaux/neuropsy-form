const asyncHandler = require('express-async-handler');
const Trame = require('../models/trameModel');

const getTrame = asyncHandler(async (req, res) => {
  const trames = await Trame.find();

  res.status(200).json(trames);
});

module.exports = { getTrame };
