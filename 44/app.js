//Sandwiches: Write a function that accepts an array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function itemAdderOnSandwitch(itemsArray) {
  console.log("You have added the following items on the Sandwitch");
  for (let i = 0; i < itemsArray.length; i++) {
    console.log(itemsArray[i]);
  }
}

itemAdderOnSandwitch(["Mayonise", "Halapenos", "Olives", "Cucumber"]);
itemAdderOnSandwitch(["Mayonise", "Ketchup", "Cucumber"]);
itemAdderOnSandwitch(["Tikka", "Ketchup", "Cucumber"]);
