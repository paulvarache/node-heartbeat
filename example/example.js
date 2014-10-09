var HeartBeat = require('../node-heartbeat');
var gpio = require('node-gpio');
var PWM = gpio.PWM;

// Prepares a PWM led with a frequency of 100 Hz
var led = new PWM("28");
led.open();
led.frequency = 100;
led.dutyCycle = 0;
led.start();

// starts the HeartBeat with a cycle of 500ms
var hb = new HeartBeat(led, 500);
hb.step = 5;
hb.start();
