const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const tasksRouter = require('./tasks');

const PORT = 3000;
const server = express();

server.use(cors({
    origin: '*'
}));
server.use(bodyParser.urlencoded({
    extended: false
}));
server.use(bodyParser.json());
server.use('/', tasksRouter);

server.get('/', (req, res) => {
    res.send('it works');
});

server.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}/`)
});