const x = setInterval(function exec() {
  console.log("Execute every minute");
}, 1000);

// clear the interval
clearInterval(x);
