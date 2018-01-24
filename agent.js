const request = require('request');
const SerialPort = require('serialport');

const INTERVAL_MS = 100;
const SERVER_URL = 'http://example.com/';
const RATE = 57600;
const SERIAL_PORT = '/dev/tty-usbserial1';
const SIGNAL_TEXT = '1';

let lastOpened;

const port = new SerialPort(SERIAL_PORT, {
	baudRate: RATE
});

port.on('error', (err) => console.error('Error: ', err.message));

const openGate = () => {
	port.write(SIGNAL_TEXT, (err) => {
	  if (err) {
	    return console.error('Error on write: ', err.message);
	  }

	  console.log('message written');
	});
};

setInterval(() => {
	request(SERVER_URL, (err, res, body) => {
		const result = JSON.parse(body);
		if (!lastOpened || result.lastOpened > lastOpened) {
			lastOpened = result.lastOpened;

			openGate();
		}
	});
}, INTERVAL_MS);