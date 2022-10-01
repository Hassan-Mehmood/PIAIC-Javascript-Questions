// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

const invites = ["Ahmed", "Hamza", "Shuja"];

for (let i = 0; i < invites.length; i++) {
  console.log(`Hey ${invites[i]}, I would like to invite to dinner tonight`);
}

console.log("Hamza can't make it to the dinner");
invites[1] = "Haziq";

for (let i = 0; i < invites.length; i++) {
  console.log(`Hey ${invites[i]}, I would like to invite to dinner tonight`);
}

console.log("Hey i found a bigger table we can invite 3 more people");
invites.unshift("Hassan");
invites.splice(3, 0, "Waleed");
invites.push("rashid");

for (let i = 0; i < invites.length; i++) {
  console.log(`Hey ${invites[i]}, I would like to invite to dinner tonight`);
}
