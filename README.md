# Interval

A (completely unnecessary) QOL setInterval wrapper

## Usage:

```javascript
const i = new Interval(console.log, 1000);

i.start('Hello World');

i.stop();

i.start('foo bar');

console.log(i.count);
```
