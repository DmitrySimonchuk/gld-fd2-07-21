import {
    formAddMovieSelector
} from "./constans";
import {
    MovieRecomendation
} from "./../movie-recomended";
import { Spinner, startLoadingSpinner, stopLoadingSpinner } from "../../../base/spinner";

export function addMovie(e) {
    e.preventDefault();

    const form = document.querySelector(formAddMovieSelector);
    const titleInput = document.querySelector('input');
    const descriptionTextarea = document.querySelector('textarea');
    const title = titleInput.value;
    const description = descriptionTextarea.value;

    document.querySelector('modal')?.remove();
    startLoadingSpinner();
    
    console.log(title, description);

    fetch('http://localhost:3000/movies', {
            method: 'POST',
            body: JSON.stringify({
                title,
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
                title,
                overview: description
            });
            document.querySelector('[class^="content"]').prepend(movieRecomendation);
            document.querySelector('modal')?.remove();

            stopLoadingSpinner();

            $.alert({
                title: 'Alert!',
                content: 'Simple alert!'
            });
        })
        .catch(err => {
            stopLoadingSpinner();
        })
}