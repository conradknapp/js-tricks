const IIFE = (function() {
  const username = "Reed";
  const password = "lkajsdasjf";

  function sayHi() {
    console.log(`hi ${username}`);
  }

  return {
    username,
    sayHi
  };
})();

IIFE;

{
  let username = "Reed";
  let password = "asldkfajskdfl";
  var results = { username };
}

results;
