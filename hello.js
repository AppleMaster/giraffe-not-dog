var http = require('http');
const dns = require('dns');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080, '178.62.45.213');
console.log('Server running at http://178.62.45.213:8080/');

dns.lookup('google.com', (err, addresses, family) => {
  console.log('addresses:', addresses);
});
