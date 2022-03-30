//Create a dog object that has four properties and three methods
let dog = {}

dog.color = 'brown'
dog.breed = 'lab'
dog.speed = 'fast'
dog.temperment = 'happy'
dog.bark = function () {
    console.log('barking')
}
dog.run = function () {
    console.log('running')
}
dog.sleep = function () {
    console.log('sleeping')
}

console.table(dog)
dog.bark()
dog.run()
dog.sleep()

function DogConstr(color,breed,speed,temperment){
    this.color = color
    this.breed = breed
    this.speed = speed
    this.temperment = temperment
    this.bark = function () {
        console.log('barking')
    }
    this.run = function () {
        console.log('running')
    }
    this.sleep = function () {
        console.log('sleeping')
    }
}

let dog1 = new DogConstr('black','doberman','fast','guarded')
console.table(dog1)
dog1.bark()
dog1.run()
dog1.sleep()