// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// \t represents tab character, it will add tab to the string
let name = "\tHassan Mehmood\t";

console.log(name);
// \n will add new line to the console
console.log("\n");
console.log(name.trim());
// trim() function delete all the white space in front and at the back of a sentence or word
