import {
    MovieRecomendation
} from '../movie-recomended/component';

export function Movie(movie) {
    const movieSection = document.createElement('section');

    movieSection.append(MovieRecomendation(movie, {
        hasOpenButton: false,
        posterOptions: {
            width: '200px',
            height: '300px'
        },
        cardOptions: {
            hasBorder: false
        }
    }));

    return movieSection;
}