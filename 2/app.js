// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let name = "hassan mehmood";

console.log("Lowercase:", name.toLowerCase());
console.log("Uppercase:", name.toUpperCase());

const name_words = name.split(" ");

let titleCaseName = name_words
  .map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  })
  .join(" ");

console.log("Titlecase:", titleCaseName);
