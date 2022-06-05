// post-rex (7 kyu) 8 months ago 1 edit
// The problem is actually very simple, but its explained in a overly complex way.

// You are asked to find 2 numbers in the fibonacci sequence f(n) and f(n+1) which product is greater or equals to the number given. You must return it as a array/tuple/what ever like this: (fn(n), fn(n+1), eq) while eq is a boolean that indicates if the product is equals with the number given.

// I hope this makes it more understandale.

// The Fibonacci numbers are the numbers in the following integer sequence (Fn):

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as

// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

// F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(n) being the smallest one such as F(n) * F(n+1) > prod.

// Some Examples of Return:
// (depend on the language)

// productFib(714) # should return (21, 34, true), 
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return (34, 55, false), 
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// -----
// productFib(714) # should return [21, 34, true], 
// productFib(800) # should return [34, 55, false], 
// -----
// productFib(714) # should return {21, 34, 1}, 
// productFib(800) # should return {34, 55, 0},        
// -----
// productFib(714) # should return {21, 34, true}, 
// productFib(800) # should return {34, 55, false}, 
// Note:
// You can see examples for your language in "Sample Tests".


function productFib(num){
    let fib = 0
    let fib2 = 1
    let fib3 = 0
    let result = true
    while (fib * fib2 < num){
        fib3 = fib + fib2
        fib = fib2
        fib2 = fib3
    }
    return fib * fib2 === num ? [fib,fib2,true] : [fib,fib2,false]
}


console.log(productFib(714)) //# should return (21, 34, true), 
                //# since F(8) = 21, F(9) = 34 and 714 = 21 * 34

console.log(productFib(800)) //# should return (34, 55, false), 
                //# since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55

// best answers
// function productFib(prod){
//     var n = 0;
//     var nPlus = 1;  
//     while(n*nPlus < prod) {
//       nPlus = n + nPlus;
//       n = nPlus - n;
//     }
//     return [n, nPlus, n*nPlus===prod];
//   }

//   function productFib(prod){
//     let [a, b] = [0, 1];
//     while(a * b < prod) [a, b] = [b, a + b];
//     return [a, b, a * b === prod];
//   }