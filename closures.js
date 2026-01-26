/*
closure is a basic concept in javascipt in which inner 
function can access the variable of outer function, 
even if outer function has completed its execution 
*/

function outer() {
    let msg = "Outer variable";
    return () => {
        console.log("Inside inner function");
        console.log(msg);
    }
}

let inner = outer(); //executed outer function
inner(); //accessed outer variable