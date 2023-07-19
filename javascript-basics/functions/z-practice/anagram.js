//write a program in javascript to find the anagram of the strings

let String1 = 'Mary';
let String2 = 'Army';


function Anagram(first, second) {
    first = first.toLowerCase();
    second = second.toLowerCase();

    first = first.split('').sort().join('');
    second = second.split('').sort().join('');
    if(first == second) {
        return true;
    } else {
        return false;
    }
}

console.log(Anagram(String1,String2));