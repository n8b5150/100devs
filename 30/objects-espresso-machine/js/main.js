//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine {
    constructor(manufacturer,model,temperature,pressure) {
      this.manufacturer = manufacturer
      this.model = model
      this.temperature = temperature
      this.pressure = pressure
    }
    makeEspresso(){
        console.log('gurgling noises and steam')
    }
    frothMilk(){
        console.log('frothing milk')
    }
    beingExpensive(){
        console.log("I'm expensive")
    }
  }

  let bravo = new EspressoMachine('Bravo','Model 1','100F','25psig')

  console.table(bravo)
  bravo.makeEspresso()
  bravo.frothMilk()
  bravo.beingExpensive()