let favoriteMovies = [];

const addFavoriteMovie = (movieName) => {
    if(!movieName.includes('The')) {
        favoriteMovies.push(movieName);
    }
}

const printFavoriteMovies = () => {
    for(let i=0; i < favoriteMovies.length; i++) {
        console.log("There are " + favoriteMovies.length + " favorite Movies: "+ favoriteMovies[i]);
    }
}

addFavoriteMovie("Ironman");
addFavoriteMovie("Avengers");
addFavoriteMovie("Tenet");

printFavoriteMovies();