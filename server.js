const http = require('http');

const PORT = process.env.PORT || 8080;
const IP = '127.0.0.1';

let lastOpened = 0;
const handleRequest = (req, res) => {
	if (req.method === 'GET') {
		res.writeHead(200, {});
		res.write(JSON.stringify({ lastOpened: lastOpened }));
		res.end();
	} else if (req.method === "POST") {
		lastOpened = new Date().getTime();
		res.writeHead(200, {});
		res.write(true);
		res.end();
	}
};

const server = http.createServer(handleRequest);
server.listen(PORT, IP);