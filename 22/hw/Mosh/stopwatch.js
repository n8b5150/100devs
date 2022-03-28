// 
// start()
// stop()
// reset()
// duration
// elapsed - added

function Stopwatch() {
    let startTime, endTime, running, duration = 0, elapsed = 0
    
    this.start = function() {
        if (running) 
            throw new Error('Stopwatch has already started.')
        running = true
        startTime = new Date()
    }

    this.stop = function() {
        if (!running)
            throw new Error('Stopwatch is not started.')
        running = false
        endTime = new Date()
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000
        duration += seconds
    }

    this.reset = function() {
        startTime = null
        endTime = null
        running = false
        duration = 0
        elapsed = 0
    }

    this.timeElapsed = function() {
        let currentTime = new Date()
        const seconds = (currentTime - startTime.getTime())/1000
        elapsed = seconds
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration
        }
    })

    Object.defineProperty(this, 'elapsed', {
        get: function() {
            !startTime ? elapsed : this.timeElapsed()
            return running ? elapsed : duration
        }
    })

}

const sw = new Stopwatch()