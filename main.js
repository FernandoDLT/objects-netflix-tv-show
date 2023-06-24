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
    pause() {
        console.log('Pausing play...')
    }
    stop() {
        console.log('Stopping...')
    }
    saveToFavs() {
        console.log('Saving to favorites list...')
    }
    deteFromFavs() {
        console.log('Deleting from favorites list...')
    }
}
let seinfeld = new MakeNetFlixTvShow('Seinfeld', 'Comedy', '99%', 56)
let peakyBlinders = new MakeNetFlixTvShow('Peaky Blinder', 'Drama Suspense', '100%', 102)