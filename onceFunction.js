// We can do this with the magic of closures
// see https://stackoverflow.com/questions/12713564/function-in-javascript-that-can-be-called-only-once#1271361

var once = (() => {
  let called = false;
  return () => {
    if (!called) {
      called = true;
      return Math.floor(Math.random() * 20);
    } else {
      return "already called once!";
    }
  };
})();

console.log(once());
console.log(once());
console.log(once());

// Can expand this into a dynamic function 'once()'

var once = (func => {
  let called = false;
  return func => {
    if (!called) {
      called = true;
      return func;
    }
  };
})();

var doMath = (x, y) => x * y;

console.log(once(doMath(2, 3)));
console.log(once(doMath()));
