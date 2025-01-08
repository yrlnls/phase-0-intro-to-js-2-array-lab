// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

// 1) destructivelyAppendCat(name)
function destructivelyAppendCat(name) {
  cats.push(name); // Adds the cat to the end of the array
}

// 2) destructivelyPrependCat(name)
function destructivelyPrependCat(name) {
  cats.unshift(name); // Adds the cat to the beginning of the array
}

// 3) destructivelyRemoveLastCat()
function destructivelyRemoveLastCat() {
  cats.pop(); // Removes the last cat from the array
}

// 4) destructivelyRemoveFirstCat()
function destructivelyRemoveFirstCat() {
  cats.shift(); // Removes the first cat from the array
}

// 5) appendCat(name)
function appendCat(name) {
  return [...cats, name]; // Returns a new array with the new cat appended
}

// 6) prependCat(name)
function prependCat(name) {
  return [name, ...cats]; // Returns a new array with the new cat prepended
}

// 7) removeLastCat()
function removeLastCat() {
  return cats.slice(0, -1); // Returns a new array without the last cat
}

// 8) removeFirstCat()
function removeFirstCat() {
  return cats.slice(1); // Returns a new array without the first cat
}
