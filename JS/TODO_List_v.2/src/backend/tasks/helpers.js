const db = require('../db.json');

function getTasks(req, res) {
    const {
        sort,
        q,
        page
    } = req.query;

    if (q) {
        return res.json(db.tasks.filter(task => {
            return task.title.toLowerCase().includes(q.toLowerCase());
        }));
    }

    if (sort === 'desc') {
        const tasks = [...db.tasks].sort((a, b) => b.id - a.id);
        return res.json(tasks);
    }

    return res.json(db.tasks);
};

function getTaskById(req, res) {
    const {
        id
    } = req.params;
    const desireTask = db.tasks.find((task) => task.id === +id);

    if (desireTask) {
        res.json(desireTask);
    } else {
        res.status(404).json({
            message: 'Task not found!'
        });
    }
};

function deleteTaskById(req, res) {
    const {
        id
    } = req.params;     
    db.tasks = db.tasks.filter(task => task.id !== +id);
    res.json(id);
};

function createTask(req, res) {
    const task = {
        ...req.body,
        id: Date.now(),
        date_creating: Date.now()
    };
    db.tasks.push(task);
    res.status(201).json(task);
};

function updateTask(req, res) {
    const {
        id: unsafeId,
        ...changes
    } = req.body;
    const {
        id
    } = req.params;
    const targetTaskIndex = db.tasks.findIndex(task => task.id === +id);

    db.tasks[targetTaskIndex] = {
        ...db.tasks[targetTaskIndex],
        ...changes
    };

    res.status(200).json(db.tasks[targetTaskIndex]);
};

module.exports = {
    getTaskById,
    getTasks,
    deleteTaskById,
    createTask,
    updateTask
};