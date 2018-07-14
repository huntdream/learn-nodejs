const fs = require('fs')

fs.readdir('./src',(err,dir)=>{
  if(err) throw  err
  console.log(dir)
})