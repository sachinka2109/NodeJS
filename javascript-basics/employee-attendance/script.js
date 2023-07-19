
let employee = [];
let absent = 0;
let halfday = 0;
let fullday = 0;
let salary = 100;

function generateAttendance() {
    for(let i = 0; i < 30;i++) {
        employee.push(Math.floor(Math.random() * 3));
    }
}

generateAttendance();
console.log(employee)


function findAttendance() {
    employee.forEach((x,i,arr) => {
        // if(x === 0) {
        //     absent++;
        // } else if(x === 1) {
        //     halfday++;
        // } else if(x === 2) {
        //     fullday++;
        // } else {
        //     console.log("Invalid");
        // }
        x === 0 ? absent++ : x === 1 ? halfday++ : x === 2 ? fullday++ : 'Invalid';
    })
}
findAttendance();

function calculateSalary() {
    let total;
    console.log(`Attendance Check = Fullday : ${fullday}, Halfday : ${halfday},Absent : ${absent}`);
    total = (halfday * (salary/2)) + (fullday * salary);
    return total;
}
console.log(`The Total Monthly Salary is : ${halfday * (salary/2)} + ${fullday * salary} = ` + calculateSalary());



// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter the total monthly salary :',(inputSalary)=> {
//     salary = inputSalary;
//     rl.question('Enter number of half day :',(halfday) => {
//         halfday = halfday;
//         rl.question('Enter number of full day :',(fullday) => {
//         fullday = fullday;
//         // findAttendance();
//         // console.log(employee);
//         console.log(`Attendance Check = Fullday : ${fullday}, Halfday : ${halfday}`);
//         console.log(`The Total Monthly Salary is: ${halfday * (salary / 2)} + ${fullday * salary} = ` + calculateSalary(salary,halfday,fullday));
//         rl.close();
//         })
//     })
// })

// function calculateSalary(salary,halfday,fullday) {
//     let total;
//     total = (halfday * (salary/2)) + (fullday * salary);
//     return total;
// }