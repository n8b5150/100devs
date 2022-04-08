//Create a constructor with 4 properties and 3 methods

function Construct(color, size, name, shape){
    this.color = color
    this.size = size
    this.name = name
    this.shape = shape
    this.start = () => {
        console.log('start')
    }
    this.nameColor = () => {
        console.log(this.color)
    }
    this.nameShape = () => {
        console.log(this.shape)
    }
}

// let constr = new Construct('red', 'large', 'qbert', 'round')
// let constr1 = new Construct('blue', 'xlarge', 'yeet', 'square')
// let constr2 = new Construct('green', 'medium', 'fart', 'oblong')
// let constr3 = new Construct('yellow', 'small', 'creed', 'triangle')

// constr.start()
// constr.nameColor()
// constr.nameShape()
// console.log(constr)
// console.log(constr1)
// console.log(constr2)
// console.log(constr3)
// Construct.prototype.yolo = true
// console.log(Construct)
// let constr4 = new Construct('purple', 'tiny', 'beeper', 'rhombus')
// console.log(constr4)
// console.log(constr4.yolo)
// console.log(Construct.prototype)


function Pizza(toppings,size,crust,sauce){
    this.toppings = toppings
    this.size = size
    this.crust = crust
    this.sauce = sauce
    this.estDelTime = () => console.log('20min')
    this.burnMouth = () => console.log('OWWWWW')
    this.slice = () => console.log('fork it over')
    this.frisbee = () => console.log('YEEEEET')
}

let pizza = new Pizza(['pepperoni','black olives'], 'large', 'stuffed', 'light')

console.log(pizza)
pizza.burnMouth()

class PizzaClass{
    constructor(toppings,size,crust,sauce){
        this.toppings = toppings
        this.size = size
        this.crust = crust
        this.sauce = sauce
    }
    estDelTime(){
        console.log('20min')
    }
    burnMouth(){
        console.log('OWWWWW')
    }
}

let pizza1 = new PizzaClass(['pepperoni','black olives'], 'large', 'stuffed', 'light')

console.log(pizza1)
pizza1.burnMouth()