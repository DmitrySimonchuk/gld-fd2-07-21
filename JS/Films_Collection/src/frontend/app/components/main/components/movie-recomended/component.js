import {
    Button
} from '../../../base/button';
import {
    Modal
} from '../../../base/modal';
import {
    Stars
} from '../../../base/stars';
import {
    Movie
} from '../movie/component';
import {
    MoviesService
} from '../../../../services/movies.service'

import styles from './styles.module.scss';
import { FormEditMovie } from '../form-edit-movie/component';

export function MovieRecomendation({
    id,
    title,
    genres,
    overview,
    releaseDate,
    stars,
    poster
}, {
    hasOpenButton = true,
    hasEditButton = true,
    posterOptions = {
        width: '100%',
        height: '200px'
    },
    cardOptions = {
        hasBorder: true
    }
} = {}) {
    const card = document.createElement('div');
    const imgEl = document.createElement('img');
    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('h5');
    const genreEl = document.createElement('h5');
    const cardText = document.createElement('p');

    card.setAttribute('data-id', id);

    const cardButton = Button({
        classList: `btn btn-primary ${styles.btnOpenMovie}`,
        content: 'Open'
    });

    card.classList.add('card', styles.movieRecomendation);

    if (cardOptions.hasBorder) {
        card.classList.add(styles.cardNoBorder);
    }

    imgEl.classList.add('card-img-top');
    cardBody.classList.add('card-body', styles.description);
    cardTitle.classList.add('card-title');
    cardText.classList.add('card-text');

    imgEl.src = poster;
    imgEl.style.width = posterOptions.width;
    imgEl.style.height = posterOptions.height;

    cardTitle.textContent = title;
    genreEl.textContent = (genres || []).join();
    cardText.textContent = overview;

    cardBody.append(Stars(stars), cardTitle, cardText);

    if (hasOpenButton) {
        cardBody.append(openMovieButton(id))
    }

    if (hasEditButton) {
        cardBody.append(editMovieButton(id))
    }

    card.append(imgEl, cardBody);

    return card;
}

function openMovie(e) {
    const movieId = e.target.dataset.id;
    //const inject = document.body.append;
    //console.log(e.target.dataset.id);
    const moviesService = new MoviesService();

    moviesService.getMovieById(movieId)
        .then(movie => {
            if (movie) {
                document.body.append(Modal({
                    title: movie.title,
                    body:
                        /*`
                            <h5>${movie.overview}<h5>
                            <p>${new Date(movie.release_date)}</p>
                            <p>${movie.genres.map(g => `<span class = "badge bg-primary">${g}</span>`).join()}</p>
                        `,*/
                        Movie(movie),
                    hasFooterCloseButton: true,
                    footerButtons: [
                        Button({
                            content: 'Save changes'
                        })
                    ]
                }));
            }
        })
        .catch(console.error);
}

function editMovie(e) {
    const movieId = e.target.dataset.id;

    const moviesService = new MoviesService();

    moviesService.getMovieById(movieId)
        .then(movie => {
            const form = FormEditMovie();
            form.setAttribute('data-id', movieId);

            document.body.append(Modal({
                title: `Edit "${movie.title}"`,
                body: form
            }));

            const titleEl = form.elements.title;
            const overviewEl = form.elements.overview;

            titleEl.value = movie.title;
            overviewEl.value = movie.overview;
        });
}

function openMovieButton(id) {
    const btn = Button({
        classlist: `btn btn-primary ${styles.btnOpenMovie}`,
        content: 'Open',
        clickHandler: openMovie
    });

    btn.setAttribute('data-id', id);

    return btn;
}

function editMovieButton(id) {
    const btn = Button({
        classlist: `btn btn-secondary`,
        content: 'Edit',
        clickHandler: editMovie
    });

    btn.setAttribute('data-id', id);

    return btn;
}