function isPalindrome(word) {
  // Write your algorithm here
  const initialArray = word.split("");
  const reversed = initialArray.reverse();
  const secondString = reversed.join("");

  return word === secondString;
}

/**
 * REWRITE PROBLEM IN MY OWN WORDS:
 * I need to make an isPalindrome function that returns either true or false. 
 * When the input string is the same forwards and backwards, I should return true. 
 * That means that if the input string is the same after I reverse it, I should return true. 
 * For instance, "mom" in reverse is also "mom", and "racecar" in reverse is also "racecar", 
 * so my solution should return true for these cases. "hi" in reverse is "ih", 
 * so my solution should return false for this case.
*/


/* 
  Add your pseudocode here
  reverse the input string

  if the reversed string is the same as the input
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("license"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome('civic'));

  console.log("Expecting: false");
  console.log("=>", isPalindrome('Hi'));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
