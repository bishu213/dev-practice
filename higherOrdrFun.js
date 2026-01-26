//Higher order function
/* 
if a has another function as parameter and return a function
*/

function display(fsum) {
    return () => {
        let r = fsum(12, 21);
        console.log(`Sum = ${r}`);
    }
}

function sum(n1, n2) {
    return n1+n2;
}

let rfun = display(sum);
rfun();