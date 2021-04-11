import {
    MovieRecomendation
} from "../movie-recomended";
import {
    formAddMovieSelector
} from "./constans";

export function addMovie(e) {
    e.preventDefault();

    const form = document.querySelector(formAddMovieSelector);
    const titleInput = document.querySelector('input');
    const descriptionTextarea = document.querySelector('textarea');
    const title = titleInput.value;
    const description = descriptionTextarea.value;

    const movieRecomendation = MovieRecomendation({
        title: title,
        overview: description
    });

    console.log(title, descriptionTextarea);

    fetch('http://localhost:3000/movies', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                overview: description
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            const movieRecomendation = MovieRecomendation({
                id: data.id,
                title: title,
                overview: description
            });
            document.querySelector('[class^="content"]').prepend(movieRecomendation);
        })
}