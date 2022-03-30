//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function SkaterBoi(name,age,board,trick){
    this.name = name
    this.age = age
    this.board = board
    this.trick = trick
    this.ollie = function (){
        console.log('ollie')
    }
    this.specialMove = function (){
        console.log(this.trick)
    }
    this.kickflip = function (){
        console.log('kickflip')
    }
}

let skater = new SkaterBoi('tony',38,'orange','TrIcKy')
console.table(skater)
skater.ollie()
skater.specialMove()
skater.kickflip()