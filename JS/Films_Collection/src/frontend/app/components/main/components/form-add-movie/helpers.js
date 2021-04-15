import {
    formAddMovieSelector
} from "./constans";
import {
    MovieRecomendation
} from "../movie-recomended";
import { MoviesService } from "../../../../services/movies.service";
import { closeModal } from "../../../base/modal/helpers";

export function addMovie(e) {
    e.preventDefault();

    const form = document.querySelector(formAddMovieSelector);
    const titleInput = document.querySelector('form input');
    const descriptionTextarea = document.querySelector('form textarea');
    const title = titleInput.value;
    const overview = descriptionTextarea.value;
    const moviesService = new MoviesService();

    document.querySelector('modal')?.remove();
        
    console.log(title, overview);

    moviesService.postMovie({
        title,
        overview
    })
        .then(data => {
            const movieRecomendation = MovieRecomendation({
                id: data.id,
                title,
                overview
            });
            document.querySelector('[class^="content"]').prepend(movieRecomendation);
            document.querySelector('modal')?.remove();

            closeModal(e);

            $.alert({
                title: 'Alert!',
                content: 'Simple alert!'
            });            
        })
        .catch(err => { console.log(err) })
}