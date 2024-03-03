// EXAMPLE 1 - Check if a Character is a Letter in JavaScript

function charIsLetter(char) {
  if (typeof char !== 'string') {
    return false;
  }

  return char.toLowerCase() !== char.toUpperCase();
}

console.log(charIsLetter('a')); // 👉️ true
console.log(charIsLetter('!')); // 👉️ false
console.log(charIsLetter(' ')); // 👉️ false
console.log(charIsLetter(null)); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if a Character is a Letter using Regex

// function charIsLetter(char) {
//   if (typeof char !== 'string') {
//     return false;
//   }

//   return /^[a-zA-Z]+$/.test(char);
// }

// console.log(charIsLetter('a')); // 👉️ true
// console.log(charIsLetter('!')); // 👉️ false
// console.log(charIsLetter(' ')); // 👉️ false
// console.log(charIsLetter(null)); // 👉️ false
