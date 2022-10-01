// 43) Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function make_great(magicianArray) {
  for (var i = 0; i < magicianArray.length; i++) {
    magicianArray[i] = "The Great " + magicianArray[i];
  }
}

function showMagician(magicianArray) {
  for (let i = 0; i < magicianArray.length; i++) {
    console.log(magicianArray[i]);
  }
}

let names = ["Hassan", "Hamza", "Shuja", "Ahmed"];
let names_copy = names.slice();
showMagician(names);

console.log("The copy Version");
make_great(names_copy);
showMagician(names_copy);

console.log("The real version");
showMagician(names);
