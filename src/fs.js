'use strict'

const fs = require('fs')

const FILE_PATH = `../data/${process.argv[2] || '../data/test.txt'}`

fs.open(FILE_PATH, 'w', (err, fd) => {
  if (err) throw  err
  fs.access(FILE_PATH, (err) => {
    if (err) throw err
    fs.watch(FILE_PATH, (event, filename) => {
      console.log(`File ${filename} has ${event}d`)
    })
    fs.writeFile(FILE_PATH, 'Hello there!', (err) => {
      if (err) throw err
      console.log('Data has been wrote to file')
      fs.readFile(FILE_PATH, {encoding: 'utf-8'}, (err, file) => {
        if (err) throw err
        console.log(file)
        fs.unlink(FILE_PATH, (err) => {
          if (err) throw  err
          fs.close(fd, (err) => {
            if (err) throw err
            console.log('File closed')
          })
          console.log(`${FILE_PATH} has been deleted successfully`)
        })
      })
    })
  })
})






