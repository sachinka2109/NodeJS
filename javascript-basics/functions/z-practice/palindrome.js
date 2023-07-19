/* 
2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/

let palindrome = (sequence) => {
    sequence = String(sequence).toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    let temp = sequence.split(' ').join('');
    console.log(temp);
    sequence = sequence.split(' ').join('');
    sequence = sequence.split('').reverse().join('');
    console.log(sequence);
    if(sequence === temp) {
        console.log('The String is a palindrome');
    } else {
        console.log('The String is not a palindrome');
    }
}

palindrome('madam');
palindrome('nurses run');
palindrome('Russia');
palindrome('Sit on a potato pan, Otis.');