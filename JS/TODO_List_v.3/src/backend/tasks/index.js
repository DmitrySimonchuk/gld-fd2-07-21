const { Router } = require('express');
const router = Router();
const {
    getTaskById,
    getTasks,    
    deleteTaskById,
    createTask,
    updateTask
} = require('./helpers');

router.get('/tasks/:id', getTaskById);
router.get('/tasks', getTasks);
router.delete('/tasks/:id', deleteTaskById);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);

module.exports = router;