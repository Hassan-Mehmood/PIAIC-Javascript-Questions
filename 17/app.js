let invites = ["Ahmed", "Hamza", "Shuja"];

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

console.log("Sorry we only have sapce for 2 people");

let i = invites.length - 1;
while (invites.length > 2) {
  console.log(`${invites[i]} Sorry we cannot invite you to dinner`);
  invites.pop();
  i--;
}
console.log(
  `${invites[0]} and ${invites[1]} You are still invited to the dinner`
);
invites = [];

console.log(invites);
