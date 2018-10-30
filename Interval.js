class Interval {
    constructor(fn, delay) {
        this.fn = fn;
        this.delay = delay;
        this.running = false;
        this.count = 0;
    }

    start(...args) {
        this.id = setInterval((...args) => {
            this.count++;
            this.fn(...args);
        }, this.delay, ...args);
        this.running = true;
    }

    stop() {
        clearInterval(this.id);
        this.running = false;
    }
}
