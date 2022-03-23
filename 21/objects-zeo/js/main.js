//Create a stopwatch object that has four properties and three methods
const stopwatch = {
    color: 'black',
    shape: 'round',
    brand: 'Timex',
    price: 'expensive',
    stop: function(){
        console.log('stop')
    },
    beep: function(){
        console.log(this.brand)
    }
}

stopwatch.size = 'medium'
stopwatch.start = function(){
    console.log('start')
}
