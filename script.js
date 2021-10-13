let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    console.log("A new movie is added");
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
    console.log("Printing all movies....");
    allMovies.forEach(movie => {
        console.log(movie.title + ", rating of " + movie.rating + ", haveWatched: " + movie.haveWatched);
    });
    console.log("You have " + allMovies.length + " movies in total");
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
    var numMatches = 0;
    console.log("printing movie that has a higher rating than " + rating);
    allMovies.forEach(movie => {
        if (movie.rating > rating) {
            console.log(movie.title + " has a higher rating of " + movie.rating);
            numMatches++;
        }
    });
    console.log("In total, there are " + numMatches + " matches")
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    console.log("changing the status of the movie...");
    allMovies.forEach(movie => {
        if (movie.title === title) {
            movie.haveWatched = !movie.haveWatched;
        }
    });

    
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);