// arrow function is the short notation to create function expression

//normal function
function a(n1, n2) { 
    console.log(`Sum=${n1+n2}`);
}
a(4, 5);

//function expression
let b = function b(n1, n2) { 
    console.log(`Sub=${n1-n2}`);
}
b(23, 21);

//1. arrow function (passing parameter & no return value)
let mul = (n1, n2) => { 
    console.log(`1.Multiply = ${n1*n2}`);
}
mul(2, 4)

//2. arrow function (passing parameter & with return value)
let div = (n1, n2) => { 
    return n1/n2;
}
console.log(`2.Division = ${div(24, 12)}`);

//3. arrow function (no parameter & with return value)
let sum = () => { 
    let n1=2;
    let n2=5;
    return n1+n2;
}
console.log(`3.Addition = ${sum()}`);

//4. arrow function (no parameter & no return value)
let sub = () => { 
    console.log('4.No paasing & no return value');
}
sub();
