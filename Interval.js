class Interval {
    constructor(fn, delay) {
        this.fn = fn;
        this.delay = delay;
    }

    start(...args) {
        this.id = setInterval(this.fn, this.delay, ...args);
    }

    stop() {
        clearInterval(this.id);
    }
}