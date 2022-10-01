// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

const str1 = "Hey";
const str2 = "Hey";
const str3 = "Hello";

console.log("Strings");
console.log(str1 == str2);
console.log(str1 == str3);

console.log("Lower Case Function");
console.log(str1.toLowerCase() == str2.toLowerCase());
console.log(str1.toLowerCase() == str2);

console.log("Numerical Tests");
const num1 = 5;
const num2 = 9;
const num3 = 5;
console.log(num1 < num2);
console.log(num1 == num2);
console.log("AND Operator");
console.log(num1 < num2 && num1 != num2);
console.log("OR Operator");
console.log(num1 > num2 || num1 == num2);

const arr = [1, 3, 5, 6, 7, 8];
console.log("Array", arr);
console.log("Array includes 3");
console.log(arr.includes(3));
console.log("Array not includes 4");
console.log(arr.includes(4));
