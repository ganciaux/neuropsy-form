const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
  label: { type: String, require: true, trim: true },
  order: { type: Number },
});

const questionSchema = mongoose.Schema({
  label: { type: String, require: true, trim: true },
  order: { type: Number },
  unique: { type: Boolean, require: true },
  report: { type: String, require: true },
  answers: [answerSchema],
});

const trameSchema = mongoose.Schema({
  label: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  questions: [questionSchema],
});

module.exports = mongoose.model('trames', trameSchema);
