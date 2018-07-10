const {join} = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io')

const publicPath = join(__dirname, '../public')

var app = express();
var server = http.createServer(app);
const port = process.env.PORT || 3000;
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('User was disconnect');
    });
});

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});