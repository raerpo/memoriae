const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const card = new Schema({
    question: { type: String, required: true },
    answer: {type: String, required: true},
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    createdAt: { type: Date, default: new Date() }
});

module.exports = mongoose.model('card', card);