const http = require('http')

const PORT = process.env.PORT || 4000

// create a http server
const server = http.createServer()

// listen for request events
server.on('request', (req, res) => {
  //get header infomation from request.headers[]
  let ua = req.headers['user-agent']
  let username = req.headers['cookie']
  if (username) {
    username = username.split('=')[1]
  } else {
    username = 'guest'
  }

  const body =
    `
    <html>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,user-sacle=1">
    <title>http module</title>
    </head>
    <body>
    <div>
      <p> Hello ${username},</p> 
      <p>Your browser's User-Agent is: ${ua},</p>
      <p>Your IP address is: ${res.socket.remoteAddress}</p>
      <p>Your source port is: ${res.socket.remotePort}</p>
    </div>
    </body>
    </html>

    `


  // set header for response
  res.writeHead(200, {
    'Connection': 'keep-alive',
    'Content-Length': body.length,
    'Content-Type': 'text/html',
    'Set-Cookie': 'username=maoyu'
  })

  // sends a chunk of response body
  res.write(body, 'utf-8', () => {
    console.log('The body has been sent to client')
  })

  // end current request
  res.end()
})

// listen for clientError event
server.on('clientError', error => {
  console.log(error)
})

// start the server to listen for request
server.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`)
})

