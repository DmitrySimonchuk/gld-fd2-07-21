import {
    MoviesService
} from "../../../../services/movies.service";
import { closeModal } from "../../../base/modal/helpers";

export function saveMovie(e) {
    e.preventDefault()

    const form = e.target.closest('form');

    const {
        title: titleEl,
        overview: overviewEl
    } = form.elements;

    const movieId = form.dataset.id;
    const title = titleEl.value;
    const overview = overviewEl.value;

    const moviesService = new MoviesService();
    
    moviesService.putMovie(movieId, {        
        title,
        overview
    }).then(movie => {
        console.log(movie);

        const card = document.querySelector(`.card[data-id="${movieId}"]`);

        console.log(card);

        const cardTitleEl = card.querySelector('.card-title');
        const cardTextEl = card.querySelector('.card-text');

        cardTitleEl.textContent = movie.title;
        cardTextEl.textContent = movie.overview;

        console.log(cardTitleEl.textContent);

        closeModal(e);

        $.alert({
            type: 'green',
            title: 'Success!',
            content: 'Movie successfully saved!'
        });
    });
}