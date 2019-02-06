let express = require('express');
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    var roomID = 'kek';
    console.log('New user connected!');
    socket.join(roomID);
    socket.on('jump', function(){
        console.log("Request is on server");
        socket.broadcast.to(roomID).emit('jumped');
    });

});

server.listen(port, '192.168.100.5', () => {
    console.log(`started on port: ${port}`);
});