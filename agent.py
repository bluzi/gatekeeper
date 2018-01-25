#!/usr/bin/python

from serial import Serial
from time import sleep
from requests import get
from json import loads
from time import time

s = Serial("COM4", 115200)

SERVER_URL = "https://cookie-gatekeeper.herokuapp.com/"
INTERVAL = 0.1

lastOpened = 0;
sleep(3)
print "Waiting for connections"
while True:
	response = loads(get(SERVER_URL).text)
	if response["lastOpened"] > lastOpened:
		print "Opening gate"
		lastOpened = response["lastOpened"]
		s.write("a")
	sleep(INTERVAL)
s.close()