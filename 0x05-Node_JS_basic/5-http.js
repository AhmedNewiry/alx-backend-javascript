const http = require('http');
const countStudents = require('./3-read_file_async');
const url = require('url');
const process = require('process');

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    const dbPath = process.argv[2];
    if (!dbPath) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Database path is missing');
      return;
    }

    countStudents(dbPath)
      .then(() => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end();
      })
      .catch((err) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(err.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;

