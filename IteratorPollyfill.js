function autoFetcher(arr) {
  let idx = 0;
  function next() {
    if (idx === arr.length) {
      return { value: undefined, done: true };
    }
    const nextElement = arr[idx];
    idx++;
    return { value: nextElement, done: false };
  }

  return { next };
}

const iterator = autoFetcher([1, 2, 3, 8, 5, 6, 7]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
