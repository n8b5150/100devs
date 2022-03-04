// *Variables*
// Declare a variable, assign it a value, and alert the value
let str = "Hello World!"
alert(str)

// Create a variable, divide it by 10, and console log the value
let divByTen = 200
console.log('divbyten ' + divByTen/10) //20

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multThree(n1,n2,n3){
    alert('MultThree ' + n1*n2*n3)
}
multThree(2,3,4) //24

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function fourNum(n1,n2,n3,n4){
    console.log('fourNum ' + (n1+n2-n3-n4))
}
fourNum(10,5,3,1) //11

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function threeNum(n1,n2,n3){
    return ((100+n1-n2)/n3 > 25) ? console.log("WE HAVE A WINNA")
    : console.log("NO WINNA")
}
threeNum(2,90,3) //No Winna
threeNum(2,2,2) //Winna

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayWeek(day){
    day = day.toLowerCase()
    return ( day === 'saturday' || day === 'friday' || day === 'sunday') ? console.log('Weekend!')
    : ( day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday') ? console.log('Week Day!')
    : console.log('try again')
}
dayWeek('Monday')
dayWeek('Tuesday')
dayWeek('wEdnesday')
dayWeek('Thursday')
dayWeek('Fridday')
dayWeek('fRiday')
dayWeek('satuRday')
dayWeek('Sunday')

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function series(n1){
    for (let i=1; i<n1+3; i+=3){
        console.log(i)
    }
}
series(33)
series(7)
series(100)