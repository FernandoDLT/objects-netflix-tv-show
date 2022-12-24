// Create a Netflix TV Show Class with constructor that makes
// Netflix  TV SHow with 4 properties and 3 methods

class MakeNetFlixTvShow {
    constructor(title,genre,rating,numOfEps) {
        this.title = title
        this.genre = genre
        this.rating = rating
        this.numOfEps = numOfEps
    }
    play() {
        console.log('Playing...')
    }
    stop() {
        console.log('Stopping...')
    }
    saveToFavs() {
        console.log('Saving to favorites list...')
    }
}
let seinfeld = new MakeNetFlixTvShow('Seinfeld', 'Comedy', '99%', 56)



// class MakeNetflixTvShow{
//     constructor(title,genre,rating,numOfEp){
//     this.title = title
//     this.genre = genre
//     this.rating = rating
//     this.numOfEp = numOfEp
//     }
//     play() {
//         console.log('Playing...')
//     }
//     stop() {
//         console.log('Stopping...')
//     }
//     saveToList() {
//         console.log('Save To List')
//     }
// }

// let bridgerton = new MakeNetflixTvShow('Bridgerton', 'Period Romance Drama', '99%', 16)