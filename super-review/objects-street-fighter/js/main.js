//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(name,specialMove,health,anger){
    this.name = name
    this.specialMove = specialMove
    this.health = health
    this.anger = anger

    this.kick = function() {
        alert('kick')
    }
    this.punch = function() {
        alert('punch')
    }
}

let ryu = new StreetFighter('Ryu','Hadoken',100,30)
console.log(ryu)
ryu.kick()
ryu.punch()
ryu.headband = 'black'

ryu.headband