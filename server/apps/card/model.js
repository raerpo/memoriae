const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const card = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  createdAt: { type: Date, default: new Date() },
  categories: [{ type: String, name: String }],
  learningScore: { type: Number, default: 0 },
  answers: {
    correct: { type: Number, default: 0 },
    wrong: { type: Number, default: 0 },
    dateLatestAnswer: { type: Date },
    dateLastestShow: { type: Date }
  }
});

card.methods.getCardScore = function () {
  // Return score based on correct answers, wrong answers and latest answer
  return 0;
}

module.exports = mongoose.model('card', card);