import {
    fetchWithLoader, Modal
} from "../components/base";

function byPath(path) {
    const serverURL = `http://localhost:3000`;

    return serverURL + path;
}

function asJSON(res) {
    return res.json();
}

export class TasksService {

    getTaskById(taskId) {
        return fetchWithLoader(byPath(`/tasks/${taskId}`))
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

    getTasks(query) {
        const q = query ? `?q=${query}` : '';
        return fetchWithLoader(byPath(`/tasks` + q))
            .then(asJSON);
    }
/*
    postMovie(movie) {
        const m = {
            title: movie.title,
            overview: movie.overview,
            genres: movie.genres,
            poster: movie.poster,
            release_date: movie.releaseDate
        }

        return fetchWithLoader(byPath(`/movies`), {
                method: 'POST',
                body: JSON.stringify(m),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(asJSON)
    }

    putMovie(movieId, movieChanges) {
        const m = {
            title: movieChanges.title,
            overview: movieChanges.overview,
            genres: movieChanges.genres,
            poster: movieChanges.poster,
            release_date: movieChanges.releaseDate
        }
        console.log('putmovie', m);
        return fetchWithLoader(byPath(`/movies/${movieId}`), {
                method: 'PUT',
                body: JSON.stringify(m),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(asJSON)
    }

    deleteMovie(movieId) {
        return fetchWithLoader(byPath(`/movies/${movieId}`), {
                method: 'DELETE',
            })
            .then(asJSON)
    } */
}