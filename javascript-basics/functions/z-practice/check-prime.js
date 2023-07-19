//write a program to check prime numbers

function checkPrime(n){
    if(n == 1) {
        console.log('Neither prime');
    }
    if(n == 2) {
        console.log('Prime number')
    }
    if(n % 2 == 0 && n % 3 == 0) {
        console.log('Not prime');
    } else {
        console.log('Prime number');
    }
}

checkPrime(2);
checkPrime(3);
checkPrime(4);