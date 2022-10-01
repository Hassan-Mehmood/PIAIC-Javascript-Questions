//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let fruits = ["apple", "oranges", "mango"];
console.log(fruits[3]); // This will give undefined because there is no 4th element in array

// To fix this we either have to add 4th element or we have to access the correct element
fruits[3] = "strawberry";
console.log(fruits[3]);
