'use strict';

const express = require('express');
const ws = require('ws');
const app = express();

const wsServer = new ws.Server({ noServer: true });
wsServer.on('connection', socket => {
  socket.on('message', message => console.log(message));
});


app.get('/', (req, res) => { res.send('Server running') })

app.get('*', (req, res) => {
  res.set('Upgrade', 'websocket');
  res.status(426).send('Upgrade Required');
})

const server = app.listen(process.env.PORT, () => { console.log('Listening on port ' + process.env.PORT)})
server.on('upgrade', (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, socket => {
    wsServer.emit('connection', socket, request);
  });
});
