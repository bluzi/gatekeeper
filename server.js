const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

let lastOpened = 0;

app.get('/', (req, res) => {
	res.send({ lastOpened: lastOpened });
})

app.post('/', (req, res) => {
	lastOpened = new Date().getTime();
	res.send(true);
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));