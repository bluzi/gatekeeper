const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

let lastOpened = 0;

app.get('/api', (req, res) => {
	res.send({ lastOpened: lastOpened });
});

app.post('/api', (req, res) => {
	lastOpened = new Date().getTime();
	res.send(true);
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, () => console.log(`Gatekeeper is listening on port ${PORT}!`));