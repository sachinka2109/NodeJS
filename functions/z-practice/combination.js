/* 

3. Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d,do,dog,o,og,g 

*/

let combinations = (string) => {
    let combo = [];             //creating a array

    function tracking(current,start) {    //making a function for backtracking
        combo.push(current);              //pushing the current string 
        for(let i = start; i < string.length; i++) { 
            tracking(current + string[i], i+1 ); 
        }
    }

    tracking('',0);         // current = '',start = 0;
    return combo.join(','); // joining the values with commas
}

const string = 'cat';
const allCombinations = combinations(string);
console.log(allCombinations);