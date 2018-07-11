const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer()


server.on('request', (req, res) => {
  const ua = req.headers['user-agent']
  console.log(ua)
  res.writeHead(200, {
    'Connection':'keep-alive',
    'Content-Length':'hello'.length,
    'Content-Type': 'text/plain'
  })
  console.log(req.url)
  res.write('hello')
  res.end()
})


server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})