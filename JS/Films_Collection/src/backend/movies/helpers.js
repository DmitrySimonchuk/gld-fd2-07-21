const db = require('../db.json');

function getMovies(req, res) {
    const {        
        q,
        page
    } = req.query;

    if (q) {
        return res.json(db.movies.filter(movie => {
            return movie.title.toLowerCase().includes(q.toLowerCase());
        }));
    }

    return res.json(db.movies.sort((m1, m2) => m2.id - m1.id).slice(0, 100));
};

function getMovieById(req, res) {
    const {
        id
    } = req.params;
    const desireMovie = db.movies.find((movie) => movie.id === id);

    if (desireMovie) {
        res.json(desireMovie);
    } else {
        res.status(404).json({
            message: 'Movie not found!'
        });
    }
};

function deleteMovieById(req, res) {
    const {
        id
    } = req.params;
    db.movies = db.movies.filter(movie => movie.id !== +id);
    res.json(id);
};

function createMovie(req, res) {
    const movie = {
        ...req.body, // title: req.body.title  - for security data on users error 
        id: `${Date.now()}`
    };
    console.log(req.body);
    db.movies.push(movie);
    res.status(201).json(movie);
};

function updateMovie(req, res) {
    const {
        id: unsafeId,
        ...changes
    } = req.body;
    const {
        id
    } = req.params;
    
    const targetMovieIndex = db.movies.findIndex(movie => movie.id === id);

    db.movies[targetMovieIndex] = {
        ...db.movies[targetMovieIndex],
        ...changes
    };

    res.status(200).json(db.movies[targetMovieIndex]);
};

module.exports = {
    getMovieById,
    getMovies,
    deleteMovieById,
    createMovie,
    updateMovie
};