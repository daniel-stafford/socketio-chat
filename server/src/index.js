import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import dotenv from 'dotenv';

import router from './router';

const app = express();
const server = http.createServer(app);
const io = socketio(server);

dotenv.config();

io.on('connection', (socket) => {
  console.log('New socket connection');
});

app.use(router);

const PORT = process.env.PORT | 4321;

server.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
