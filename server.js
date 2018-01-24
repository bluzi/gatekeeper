const http = require('http');

const server = http.createServer(handleRequest);

const PORT = process.env.PORT || 8080;
const IP = '127.0.0.1';

server.listen(port, ip);

let lastOpened;
const handleRequest = (req, res) => {
	if (req.method === 'GET') {
		res.writeHead(200, {});
		res.write(JSON.stringify({ lastOpened }));
		res.end();
	} else if (req.method === "POST") {
		lastOpened = new Date().getTime();
		res.writeHead(200, {});
		res.write(true);
		res.end();
	}
};