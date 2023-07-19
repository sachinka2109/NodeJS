// Count Characters: Write a function that counts the number of occurrences of each character in a given string.


function countCharacters(str) {
  const charCount = {};
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  
  return charCount;
}
  
const string = "Hello, World!";
const characterCount = countCharacters(string);
console.log(characterCount);