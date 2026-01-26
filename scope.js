/* 
three kind of scope in javascript
1. Global scope
2. Function scope
3. Block scope
*/

let n1 = 10; //global scope variable

function msg() {
    let msg = "Welcome to function scope"; //function scope variable
    console.log(msg);
    console.log(n1);
    if(true) { //block scope
        let x = 10;
        console.log(`x=${x}`);
    }
    // console.log(`x=${x}`);
}
msg();