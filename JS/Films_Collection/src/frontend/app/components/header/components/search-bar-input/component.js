import {
    debounce,
    fetchWithLoader,
    randomIntFromInterval,
    throttle
} from '../../../base/helpers';
import {
    MovieRecomendation
} from '../../../main/components/movie-recomended';

import contentStyles from './../../../main/components/content/styles.module.scss';

export function SearchBarInput() {
    const searchBarInput = document.createElement('input');

    searchBarInput.classList.add('search-bar-input', 'form-control');

    const debouncedSearch = debounce(search, 500);

    searchBarInput.addEventListener('keypress', debouncedSearch);

    return searchBarInput;
}

function search(e) {
    const q = e.target.value;

    if (q.length > 2) {
        fetchWithLoader(`http://localhost:3000/movies?q=${q}`)
            .then(res => res.json())
            .then(movies => {
                console.log(movies);
                const content = document.querySelector(`.${contentStyles.content}`);
                const fr = document.createDocumentFragment();

                movies.forEach((movie) => {
                    fr.append(MovieRecomendation({
                        id: movie.id,
                        title: movie.title,
                        genres: movie.genres,
                        releaseDate: new Date(movie.release_date).getFullYear(),
                        stars: randomIntFromInterval(0, 5),
                        overview: movie.overview,
                        poster: movie.poster
                    }));
                });

                content.innerHTML = '';
                content.append(fr);
            })
    }
}