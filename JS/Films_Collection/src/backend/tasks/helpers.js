const db = require('../db.json');

function getTasks(req, res) {
    res.json(db.tasks);
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
        id: Date.now()
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
    getTasks,
    deleteTaskById,
    createTask,
    updateTask
};