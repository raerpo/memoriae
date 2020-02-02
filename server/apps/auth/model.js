const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const Schema = mongoose.Schema;

const User = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true, select: false },
  email: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
  cards: [{ type: Schema.Types.ObjectId, ref: 'card', select: false }]
});

User.methods.encryptPassword = async function (password) {
  const salt = await bcryptjs.genSalt(10);
  const hash = await bcryptjs.hash(password, salt);
  return hash;
}

User.methods.checkPassword = async function (password) {
  const result = await bcryptjs.compare(password, this.password);
  return result;
}

module.exports = mongoose.model('user', User);