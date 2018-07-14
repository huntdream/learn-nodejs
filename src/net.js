const net = require('net')

const server = net.createServer()

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log(`PORT ${server.address().port} is already in use`)
  }
  console.log(e)
})

server.on('connection', (socket) => {
  socket.write('Welcome\n')
  console.log('A new socket is connected')
  server.getConnections((err, count) => {
    if (err) throw err
    console.log(count)
  })
})

server.listen(3002, () => {
  console.log('Address:', server.address())
})