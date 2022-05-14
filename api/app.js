const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const usersRoutes = require('./routes/users');
const logRoutes = require("./middleware/log-routes");

app.use(logRoutes)

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Welcome to EnterQuiz!'));

module.exports = app;