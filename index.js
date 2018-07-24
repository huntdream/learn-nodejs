const fs = require('fs')
const path = require('path')

const DIR = './src'

class Tree {
  constructor() {
    this.tree = {}
  }

  generate(root) {
    const tree = {}
    return fs.readdir(root, (err, dirs) => {
      if (err) throw err
      dirs.map(dir => {
        const fullPath = path.resolve(root, dir)
        fs.stat(fullPath, (err, stats) => {
          if (err) throw err
          if (stats.isDirectory()) {
            tree[dir] = { type: 'children' }
          } else if (stats.isFile()) {
            tree[dir] = { type: 'file' }
          }
        })
      })
      console.log(tree)
    })
  }
}

const tree = new Tree()
tree.generate(DIR)
