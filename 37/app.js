//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function large_shirt() {
  const message = "I love JavaScript";
  const sentence = `The size of the shirt is large and the message printed on it is ${message}`;
  console.log(sentence);
}

function medium_shirt() {
  const message = "I love JavaScript";
  const sentence = `The size of the shirt is medium and the message printed on it is ${message}`;
  console.log(sentence);
}

large_shirt();
medium_shirt();
