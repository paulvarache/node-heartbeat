function HeartBeat (pin, time) {
    this.pin = pin;
    this.time = time;
    this.direction = 1;
    this.currentTO = null;
    this.step = 1;
}

HeartBeat.prototype.start = function () {
    var func = null;
    var value = this.pin.dutyCycle;
    if (value == 0) {
        this.direction = 1;
    } else if (value == 100) {
        this.direction = 0;
    }
    var v = this.direction ? this.step : 0 - this.step;
    this.pin.dutyCycle = Math.max(0,Math.min(100, value + v));
    this.currentTO = setTimeout(this.start.bind(this), Math.floor(this.time / Math.floor(100 / this.step)));
}

HeartBeat.prototype.stop = function () {
    clearTimeout(this.currentTO);
    this.direction = 1;
}

module.exports = HeartBeat;
