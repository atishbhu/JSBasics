const arr = [1, 2, 3, 4, 5, 6, 7];

const iterator = arr[Symbol.iterator]();
let next = iterator.next();

while (!next.done) {
  console.log(next.value);
  next = iterator.next();
}
