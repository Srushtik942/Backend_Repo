const {initializeDatabase} = require("./db/db.connect")
const fs = require("fs");
const Movie = require("./BE1.1_Cw/models/movies.models");
initializeDatabase();

const jsonData = fs.readFileSync('movies.json','utf-8');
const moviesData = JSON.parse(jsonData);

// function seedData(){
//     try{
//         for(const movieData of moviesData){
//             const newMovie = new Movie({
//                 title : movieData.title,
//                 releaseYear : movieData.releaseYear,
//                 genre: movieData.genre,
//                 director: movieData.director,
//                 actors: movieData.actors,
//                 language: movieData.language,
//                 country : movieData.country,
//                 rating: movieData.rating,
//                 plot: movieData.plot,
//                 awards: movieData.awards,
//                 posterUrl: movieData.posterUrl,
//                 trailerUrl: movieData.trailerUrl

//            })
//             newMovie.save();
//         }
//     }catch(error){
//      console.log("Error seeding the data",error);
//     }
// }

// seedData();


const newMovie = {
    title: "new Movie",
    releaseYear: 1965,
    genre: ["Romance"],
    director: "new dirctor",
    actors: ["actor 1", "actor 2"],
    language: "Hindi",
    country: "India",
    rating: 8.1,
    plot: "A young man and woman fall in love on a Europe trip.",
    awards: "Multiple Filmfare Awards",
    posterUrl: "https://example.com/poster1.jpg",
    trailerUrl: "https://example.com/trailer1.mp4"
  }

async function createMovie(newMovie) {
    try{
        const movie = new Movie(newMovie);
        const saveMovie = await movie.save();
        console.log("New movie data:", saveMovie);

    }catch(error){
        throw error
    }
}

// createMovie(newMovie);

// find a movie with particular title

async function readMovieFileTitle (movieTitle){
    try{
        const movie = await Movie.findOne({title : movieTitle});
        console.log(movie);

    }catch(error){
        throw error
    }
}

// readMovieFileTitle("3 Idiots")

// find all movies

async function getAllMovies(){
    try{
        const movie = await Movie.find();
        console.log("All Movies",movie);

    }catch(error){
        throw error;
    }
}
// getAllMovies();

// get movie by director

async function readMovieByDirector(director){
    try{
        const movieByDirector = await Movie.find({director:director});
        console.log(movieByDirector);

    }catch(error){
        throw error;
    }
}
// readMovieByDirector("Kabir Khan")


// find movie by id and update rating

async function updateMovie(movieId, dataToUpdate){

    try{
  const updatedMovie = await Movie.findByIdAndUpdate(movieId, dataToUpdate, {new: true});
  console.log(updatedMovie);

    }catch(error){
        throw error;
    }
}

updateMovie("68a45d18dabcf67589e65277",{releaseYear: 2002});


// find one method

async function updateYear(title, dataToUpdate) {
    try{
        const updateYear = await Movie.findOneAndUpdate({title:title}, dataToUpdate, {new: true});
        console.log(updateYear);
    }catch(error){
        throw error;
    }
}

// updateYear("Kabhi Khushi Kabhi Gham", { releaseYear: 2001});

// find movie by id and delete it

async function deleteMovie(movieId){
    try{
        const deleteMovie = await Movie.findByIdAndDelete(movieId);

    }catch(error){
        consolelog("Error in deleeting movie!", error)
    }
}

// deleteMovie("68a45d18dabcf67589e65277")

async function deleteMovieFromDb(movieTitle){
    try{
        const deleteMovie = await Movie.findOneAndDelete({title:movieTitle});
        console.log(deleteMovie);
    }catch(error){
        console.log("Error in movie deletion!",error);
    }
}
deleteMovieFromDb("3 Idiots")

