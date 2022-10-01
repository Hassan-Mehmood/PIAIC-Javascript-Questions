// 42) Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function showMagician(magicianArray) {
  for (let i = 0; i < magicianArray.length; i++) {
    console.log(magicianArray[i]);
  }
}

let names = ["Hassan", "Hamza", "Shuja", "Ahmed"];
let magicialNameCopy = names.slice();
showMagician(names);

function make_great(magicianArray) {
  for (var i = 0; i < magicianArray.length; i++) {
    magicianArray[i] = "The Great " + magicianArray[i];
  }
}

console.log("The copy Version");
make_great(magicialNameCopy);
showMagician(magicialNameCopy);
