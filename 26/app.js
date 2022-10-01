// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
//
// • If the alien is yellow, print a message that the player earned 10 points.
//
// • If the alien is red, print a message that the player earned 15 points.
//
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// verision1
let alien_clr = "green";
if (alien_clr === "green") {
  console.log("You have earned 5 points");
} else if (alien_clr === "yellow") {
  console.log("You have earned 10 points");
} else if (alien_clr === "red") {
  console.log("You have earned 15 points");
}
// verision 2
alien_clr = "yellow";
if (alien_clr === "green") {
  console.log("You have earned 5 points");
} else if (alien_clr === "yellow") {
  console.log("You have earned 10 points");
} else if (alien_clr === "red") {
  console.log("You have earned 15 points");
}

// verision 3
alien_clr = "red";
if (alien_clr === "green") {
  console.log("You have earned 5 points");
} else if (alien_clr === "yellow") {
  console.log("You have earned 10 points");
} else if (alien_clr === "red") {
  console.log("You have earned 15 points");
}
