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
        const m = {
            title: task.title,
            body: task.body,
            dedline: task.dedline,
            date_creating: task.date_creating,
            status: task.status,
            priority: task.priority
        }

        return fetchWithLoader(byPath(`/tasks`), {
                method: 'POST',
                body: JSON.stringify(m),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(asJSON)
    }

    putTask(taskId, taskChanges) {
        const m = {
            title: taskChanges.title,
            body: taskChanges.body,
            dedline: taskChanges.dedline,
            date_creating: taskChanges.date_creating,
            status: taskChanges.status,
            priority: taskChanges.priority,
        }        
        return fetchWithLoader(byPath(`/tasks/${taskId}`), {
                method: 'PUT',
                body: JSON.stringify(m),
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