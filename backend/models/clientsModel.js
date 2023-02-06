const mongoose = require('mongoose');

const clientsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    firstname: {
      type: String,
      require: true,
      trim: true,
    },
    birthdate: {
      type: Date,
    },
    phone: {
      type: String,
      trim: true,
    },
    gsm: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },
    zip: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Clients', clientsSchema);
