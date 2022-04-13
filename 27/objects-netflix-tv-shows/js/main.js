//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class NetflixShow {
    constructor(title,genre,duration,producer,company){
        this.title = title
        this.genre = genre
        this.duration = duration
        this.producer = producer
        this.company = company
    }
    play(){
        console.log('play')
    }
    pause(){
        console.log('pause')
    }
    skip(){
        console.log('skip')
    }
    rate(){
        console.log('choose number of stars')
    }
}

let arrestedDevelopment = new NetflixShow ('Arrested Development','comedy','22 min','Brian Grazer','The Hurwitz Company')