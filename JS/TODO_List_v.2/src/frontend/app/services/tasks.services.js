import {
    fetchWithLoader,
    Modal
} from "../components/base";

function byPath(path) {
    const serverURL = `http://localhost:3000`;

    return serverURL + path;
}

function asJSON(res) {
    return res.json();
}

function taskParametres(task) {
    const parametres = {
        title: task.title,
        body: task.body,
        deadline: task.deadline,
        date_creating: task.date_creating,
        status: task.status,
        priority: task.priority
    }

    return parametres;
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
                    return asJSON(res);
                }
            });
    }

    getTasks(query) {
        const q = query ? `?q=${query}` : '';

        return fetchWithLoader(byPath(`/tasks` + q))
            .then(asJSON);
    }

    postTask(task) {
        const parametres = taskParametres(task);

        return fetchWithLoader(byPath(`/tasks`), {
                method: 'POST',
                body: JSON.stringify(parametres),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(asJSON)
    }

    putTask(taskId, taskChanges) {
        const parametres = taskParametres(taskChanges);

        return fetchWithLoader(byPath(`/tasks/${taskId}`), {
                method: 'PUT',
                body: JSON.stringify(parametres),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(asJSON)
    }

    deleteTask(taskId) {
        return fetchWithLoader(byPath(`/tasks/${taskId}`), {
                method: 'DELETE',
            })
            .then(asJSON)
    }
}