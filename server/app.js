const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/tasks', taskRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;