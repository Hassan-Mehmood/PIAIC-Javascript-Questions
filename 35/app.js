// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals = ["cat", "dog", "parrot"];

for (let i = 0; i < animals.length; i++) {
  if (animals[i] === "cat") {
    console.log("Cat is a cute pet");
  } else if (animals[i] === "dog") {
    console.log("Dog is a loyal pet");
  } else if (animals[i] === "parrot") {
    console.log("Parrots are beautiful");
  }
}

console.log("They all are pets");
console.log("They all are non-dangerous animals");
