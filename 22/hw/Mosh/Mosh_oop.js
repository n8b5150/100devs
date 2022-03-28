//Object literal
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw')
//     }
// }

// circle.draw()

//Factory Functio
function createCircle(radius) {
    return{
        radius,
        draw: function() {
        console.log('draw')
        }
    }
}
const circle = createCircle(1) //pass 1 as the radius
circle.draw()

//Constructor Function
function Circle(radius) {
    this.radius = radius
    this.draw = function() {
        console.log('draw')
    }
}
const another = new Circle(1) //'new' creates an empty object
//from console: 
// another.constructor
// ƒ Circle(radius) {
//     this.radius = radius
//     this.draw = function() {
//         console.log('draw')
//     }
// }

const Circle1 = new Function('radius',`
this.radius = radius
this.draw = function() {
    console.log('draw')
}
`)

const circle1 = new Circle1(1)
const another1 = new Circle(1)
//functions are objects
Circle.call({},1) //equivalent to const another = new Circle(1)
Circle.apply({},[1,2,3]) //allows an array to be passed


//primitives and reference types
let x = 10
let y = x
x = 20

y = 10

let xObj = { value: 10 }
x.value = 20
y = x //y = 20

let number = 10
function increase(number) {
    number++
}
increase(number)
console.log(number) //10 primitive value is not changed

let number1 = {value: 10}
function increase1(obj) {
    obj.value++
}
increase1(number1)
console.log(number1) //11 object value is changed


//Working with Properties
//add property
circle.location = {x: 1} //dot notation
circle['location'] = {x: 2} //bracket notation

const propertyName = 'center location' //use when there is a special character in property name
circle[propertyName] = {center: 3}

//delete property
delete circle[propertyName]
delete circle.location

//enumerate properties/methods in object
for ( let key in circle ){
    console.log(key, circle[key])
}
for ( let key in circle ){
    if (typeof circle[key] != 'function')
    console.log(key, circle[key])
}
const keys = Object.keys(circle)
console.log(keys)

if ('radius' in circle){
    console.log('Circle has a radius.')
}


//Abstraction - hide details and complexity, only show essentials
//Private Properties

function CircleAbstraction(radius) {
    let color = 'red' //hide
    
    this.radius = radius //show
    let defaultLocation = { x: 0, y: 0} //hide by making a variable
    let computeOptimumLocation = function(factor) { //hide
        //..
    }
    this.draw = function() {  //show 
        let x, y
        this.radius
        defaultLocation
        computeOptimumLocation() //don't use 'this'
        console.log('draw')
    }
}

const circleAbstraction = new CircleAbstraction(10)
for ( let key in circleAbstraction ){
    console.log(key, circleAbstraction[key])
}


//Setters and Getters

function CircleSetGet(radius) {
    this.radius = radius
    let defaultLocation = { x: 0, y: 0 }

    this.getDefaultLocation = function() { //access defaultLocation as a method
        return defaultLocation
    }

    Object.defineProperty(this, 'defaultLocation',{ //access defaultLocation as a property
        get: function() {
            return defaultLocation
        },
        set: function(value) {
            if (!value.x || !value.y)
            throw new Error('Invalid location.')
        defaultLocation = value
        }
    })

}

const circleSetGet = new CircleSetGet(10)
console.log(circleSetGet.defaultLocation)