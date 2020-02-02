require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const errorHandler = require('./middlewares/errorHandler');
const passportJWT = require('./middlewares/authHandler')();

// import apps
const post = require('./apps/post/route');
const card = require('./apps/card/route');
const auth = require('./apps/auth/route');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(passportJWT.initialize());

// register routes
app.use('/api/post', post);
app.use('/api/cards', card);
app.use('/api/auth', auth);

app.use(errorHandler);

mongoose.connect('mongodb://localhost:27017/memoriae', { useNewUrlParser: true, useUnifiedTopology: true }).then(connected => {
  console.log('> Connected to database');
  app.listen(8080, () => {
    console.log(`> listening on port ${8080}`);
  })
});
