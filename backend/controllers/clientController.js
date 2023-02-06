const asyncHandler = require('express-async-handler');
const Clients = require('../models/clientsModel');

const getClients = asyncHandler(async (req, res) => {
  const clients = await Clients.find();

  res.status(200).json(clients);
});

const setClient = asyncHandler(async (req, res) => {
  const client = await Clients.create(req.body);
  res.status(201).json(client);
});

const updateClient = asyncHandler(async (req, res) => {
  const client = await Clients.findById(req.params.id);
  if (!client) {
    res.status(400);
    throw new Error('Client not found');
  }
  const updatedClient = await Clients.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    },
  );

  res.status(200).json(updatedClient);
});

module.exports = { getClients, setClient, updateClient };
