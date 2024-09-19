const express = require('express');
const countStudents = require('./3-read_file_async');
const process = require('process');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const dbPath = process.argv[2];
  if (!dbPath) {
    res.status(500).send('Database path is missing');
    return;
  }

  countStudents(dbPath)
    .then(() => {
      res.send();
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
