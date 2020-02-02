const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Card = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  createdAt: { type: Date, default: new Date() },
  categories: [{ type: String, name: String }],
  correctAnswers: { type: Number, default: 0 },
  wrongAnswers: { type: Number, default: 0 },
  latestAnswer: { type: Date }
});

Card.methods.getCardScore = function () {
  // Return score based on correct answers, wrong answers and latest answer
  return 0;
}

module.exports = mongoose.model('card', Card);