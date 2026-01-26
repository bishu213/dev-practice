// function and function expression
/* 1.function is reusable block of code designed to perform a particular task
   2. function keyword or arrow notation(=>) use to create function in javascript.
   3. function may return value and you may  pass paramemters to function
*/ 


sum(11, 21); //can call before function declaration

function sum(n1, n2) { //function declaration
    // let n1 = 20;
    // let n2 = 10;

    let r = n1+n2;
    console.log(`Sum = ${r}`);
}


sum(2, 6)


// let r = mul(2, 8);
// console.log(`Multiply = ${r}`); //hoisting and can't call before function expression declaration

let mul = function mult(n1, n2) { //function expression
    return n1*n2;
}

let r = mul(2, 8);
console.log(`Multiply = ${r}`);