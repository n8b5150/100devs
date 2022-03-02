//  https://javascript.info/function-basics tasks

// Is "else" required?
// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Did parents allow you?');
//   }
// }
// Will the function work differently if else is removed?

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Did parents allow you?');
// }
// Is there any difference in the behavior of these two variants?

// Answer: They will both work.




// Rewrite the function using '?' or '||'
// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
// Rewrite it, to perform the same, but without if, in a single line.

// Make two variants of checkAge:
// Using a question mark operator ?

function checkAge(age) {
    return (age > 18) ? true : confirm("Did parents allow you?")
}

// Using OR ||
function checkAge(age) {
    return (age > 18) || confirm("Did parents allow you?")
}


// Function min(a, b)
// Write a function min(a,b) which returns the least of two numbers a and b.
// For instance:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a,b) {
    return (a < b) ? a : b
}


// Function pow(x,n)
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
// Run the demo
// P.S. In this task the function should support only natural values of n: integers up from 1.

document.querySelector('#getResult').addEventListener('click',pow)

function pow(x,n){
    x = Number(document.querySelector('#xValue').value)
    n = Number(document.querySelector('#nValue').value)
    if (n < 1){
        alert('Power must be greater or equal to 1')
    }else {
        let prod = x
        for (i=1; i<n; i++) {
            prod*=x
        }
        document.querySelector('#answer').innerText = prod
    }
}
