//Create a pizza object that has four properties and three methods
let pizza = {
    size: 'large',
    crust: 'thin',
    sauce: 'lots',
    toppings: ['pepperoni','black olives','mushrooms'],
    cheese: 'extra',
    slice: () => {
        console.log('slice')
    },
    sizzle: () => {
        console.log('steamy sizzle')
    },
    disappear: () => {
        console.log('where\'d it go')
    },
}

console.log(pizza)
pizza.slice()
pizza.sizzle()
pizza.disappear()
console.log(pizza.toppings.join(" + "))