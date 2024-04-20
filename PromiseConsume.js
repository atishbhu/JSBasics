console.log("Hii");

function getRandomeInt(max) {
  return Math.floor(max * Math.random());
}

function createPromise() {
  return new Promise(function exect(resolve, reject) {
    setTimeout(function () {
      const num = getRandomeInt(10);

      if (num % 2 == 0) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 5000);
  });
}
console.log("starting....");
const result = createPromise();

console.log("We are waiting for promise to complete");
console.log("currently my promise object is like ..., ", result);

result.then(
  function fullfilledHandler(value) {
    console.log("inside fullfill handler with value, ", value);
    console.log("Promise state inside fullfilled handler, ", result);
  },
  function rejectedHandler(value) {
    console.log("inside rejected handler with value, ", value);
    console.log("Promise state inside rejected  handler, ", result);
  }
);

console.log("end");
