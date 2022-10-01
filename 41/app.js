// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function showMagician(magicianArray) {
  for (let i = 0; i < magicianArray.length; i++) {
    console.log(magicianArray[i]);
  }
}

let magicialName = ["Hassan", "Hamza", "Shuja", "Ahmed"];
showMagician(magicialName);
