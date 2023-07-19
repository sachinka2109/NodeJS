// Remove duplicates from array using filter

// let array = [1,2,3,4,5,3,2,1,6,7,8];
let array = ["John","Bob","Alice","John"];
let array2 = [];
function removeDuplicates(numbers) { 
    return numbers.filter((x,i,array) => array.indexOf(x) === i);
}

console.log(removeDuplicates(array));

// for (let i = 0; i < array.length; i++) {
//     let isDuplicate = false;
//     for(let j = i+1; j < array.length; j++) {
//         if(array[i] === array[j]) {
//             isDuplicate = true;
//             break;
//         }
//     }
//     if(!isDuplicate) {
//         array2.push(array[i]);
//     }
// }
// console.log(array2.sort());
