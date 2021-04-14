import {
    fetchWithLoader
} from "../components/base/helpers";

function byPath(path) {
    const serverURL = `http://localhost:3000`;

    return serverURL + path;
}

function asJSON(res) {
    return res.json();
}

export class MoviesService {
    
    getMovieById(movieId) {
        return fetchWithLoader(byPath(`/movies/${movieId}`))
            .then(res => {
                if (res.status === 404) {
                    res.text().then(errorMessage => {
                        document.body.append(Modal({
                            title: errorMessage
                        }));
                    });
                } else {
                    return res.json();
                }
            });
    }

    getMovies(query) {
        const q = query ? `?q=${query}` : '';
        return fetchWithLoader(byPath(`/movies` + q))
            .then(asJSON);
    }

    postMovie(movie) {
        const m = {
            title: movie.title,
            overview: movie.overview
        }

        return fetchWithLoader(byPath(`/movies`, {
                method: 'POST',
                body: JSON.stringify(m),
                headers: {
                    'Content-Type': 'application/json'
                }
            }))
            .then(asJSON)
    }
}