const Card = require('./model');
const validationHandler = require('../../middlewares/validationHandler');

const addCard = async (req, res, next) => {
  try {
    validationHandler(req);
    const { question, answer } = req.body;
    const card = new Card({
      question,
      answer
    });
    const savedCard = await card.save();
    res.send(savedCard);
  } catch (error) {
    next(error);
  }
}

const getCards = (req, res) => {
  Card.find({}, null, { sort: { createdAt: -1 } }).then(data => {
    res.send(data);
  });
}

module.exports = {
  addCard,
  getCards
}