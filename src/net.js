// The net module provides an asynchrounous network API for creating stream-based TCP or ICP servers and clients
const net = require('net')
const fs = require('fs')


//server
const server = net.createServer(socket => {
  socket.write('Welcome to the server\n')
  socket.pipe(socket)
})

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log(`PORT is already in use`)
  }
  console.log(e)
})


server.listen(4000, () => {
  console.log('Server started on http://localhost:4000')
})


//client
const client = net.Socket()

client.connect(4000, () => {
  console.log('Connected')
  client.write('Client: Hello from client')
})

client.on('data', data => {
  console.log('Server: ' + data)
})

client.on('close', () => {
  console.log('Connection closed')
})