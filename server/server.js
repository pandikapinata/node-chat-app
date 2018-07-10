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

    socket.emit('newMessage', {
        from: 'Rista',
        text: 'Halo kawan',
        createdAt: 08092018
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('User was disconnect');
    });
});

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});
