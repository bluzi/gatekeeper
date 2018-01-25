const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({ lastOpened: lastOpened });
})

app.post('/', (req, res) => {
	lastOpened = new Date().getTime();
	res.send(true);
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));