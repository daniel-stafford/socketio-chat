import express from 'express';
import http from 'http';
import socketio from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = socketio(server);

server.listen(3000, () => {
  console.log('server listening');
});
