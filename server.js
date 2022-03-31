const http = require('http');
const dataTime = require('./my_modules/time')
const calculator = require('./my_modules/calculator')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`Ola Terceiro B mais querido! \n\n` + dataTime.myDateTime());
}).listen(8080);