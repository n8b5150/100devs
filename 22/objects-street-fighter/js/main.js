//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(health,stamina,colorScheme,specialMove) {
    this.health = health
    this.stamina = stamina
    this.colorScheme = colorScheme
    this.specialMove = specialMove
    this.comboLight = (a,b) => {
        let sum = a + b
        console.log('i hit you,but not hard ' + sum)
    }
    this.comboHeavy = () => {
        console.log('i hit you real hard  ' + this.specialMove)
    }
    this.deathAnimation = () => {
        console.log('i ded')
    }

}

let ken = new StreetFighter(10,20,'red and green','FIREBALL')
console.table(ken)
ken.comboLight(3,4)
ken.comboHeavy()
ken.deathAnimation()