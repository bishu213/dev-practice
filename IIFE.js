//IIFE: immediately invoked function expression
/* 
these are the functions which are invoked or executed immediately after they declared
*/

(function () {
    console.log("anonymous iife function")
})();

//or

(function msg () {
    console.log("normal iife function")
})();

//or

(() => {
    console.log("arrow iife function")
})();