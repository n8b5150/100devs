//Create an a class and extend it - Can be anything you would like it to be! 
class Animal{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this._name} makes a sound`)
    }
}

class Turtle extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        console.log(`${this.name} hisses`)
    }
}

const boxTurtle = new Turtle('Turtle', 'Box')
boxTurtle.name = 'Joe' //does nothing
console.log(boxTurtle.name) //returns Turtle
boxTurtle.speak()
