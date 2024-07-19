// Create web server
// Create a server that will return a list of comments.
// The comments are stored in a file called comments.json.
// The comments should be returned as a JSON object.
// The server should listen on port 3000.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/comments' && req.method === 'GET') {
    fs.readFile('comments.json', 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal server error');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});