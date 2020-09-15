let favoriteMovies = [];

const addFavoriteMovie = (movieName) => {
    if(!movieName.includes('The')) {
        favoriteMovies.push(movieName);
    }
}

const printFavoriteMovies = () => {
    console.log("There are " + favoriteMovies.length + " favorite Movies: "+ favoriteMovies);
}

addFavoriteMovie("Ironman");
addFavoriteMovie("Avengers");
addFavoriteMovie("Tenet");

printFavoriteMovies();