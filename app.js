let favoriteMovies = [];

const addFavoriteMovie = (movieName) => {
    if(!movieName.includes('The')) {
        favoriteMovies.push(movieName);
    }
}

const printFavoriteMovies = () => {
    favoriteMovies.length === 0 ? console.log("There is no favorite movie.") :
    favoriteMovies.length === 1 ? console.log("There is " + favoriteMovies.length + " favorite movie.") :
    console.log("There are " + favoriteMovies.length + " favorite movies.");
    for (let i=0; i<favoriteMovies.length; i++) {
        console.log(favoriteMovies[i]);
    }
}

addFavoriteMovie("Ironman");
addFavoriteMovie("Spiderman");
addFavoriteMovie("Tenet");
addFavoriteMovie("The Avengers");
addFavoriteMovie("The sound of music");
addFavoriteMovie("Interstellar");



printFavoriteMovies();