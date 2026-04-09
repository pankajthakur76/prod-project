const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from Backend 🚀");
}).listen(5000);
