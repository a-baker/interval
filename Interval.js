class Interval {
    constructor(fn, delay) {
        this.fn = fn;
        this.delay = delay;
        this.running = false;
    }

    start(...args) {
        this.id = setInterval(this.fn, this.delay, ...args);
        this.running = true;
    }

    stop() {
        clearInterval(this.id);
        this.running = false;
    }
}
