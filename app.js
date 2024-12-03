function isRepdigit(N) {
  // Convert the number to a string
  let numStr = N.toString();

  // Check if all characters are the same
  let firstDigit = numStr[0];
  for (let i = 1; i < numStr.length; i++) {
    console.log(i);

    console.log(numStr[i]);

    if (numStr[i] !== firstDigit) {
      return false;
    }
  }
  return true;
}

// Example usage:
let number = 999;
console.log(isRepdigit(number)); // Output: true
