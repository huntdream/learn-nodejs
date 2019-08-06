// The os module provides a number of operating system-related utility methods
const os = require('os')

//end-of-line
const eol = os.EOL
console.log('Windows \\r\\n:', eol === '\r\n')
console.log('POISX \\n: ', eol === '\n')

//CPU architecture
const arch = os.arch()
console.log('CPU architecture', arch)

//operating system specific constants
const constants = os.constants
console.log('OS constants: \n', constants)

//information about each logical CPU core
const cpus = os.cpus()
console.log('CPU core information: \n', cpus)

// the endianness of the cpu
const endianness = os.endianness()
console.log('The endianness of CPU: ', endianness)

//the total amount of system memory in bytes
const totalmemory = os.totalmem()
console.log('Total system memory(in megabytes): ', totalmemory / 1024 / 1024)

//the amount of free system memory in bytes
const freememory = os.freemem()
console.log('Free system memory(in megabytes): ', freememory / 1204 / 1024)

//hostname of the operating system
const hostname = os.hostname()
console.log('Hostname: ', hostname)

//networkinterfaces that have been assigned a network address
const networkInterfaces = os.networkInterfaces()
console.log('Network Interfaces: ', networkInterfaces)

//operating system platform
const platform = os.platform()
console.log('Operating system platform: ', platform)

//operating system release
const release = os.release()
console.log('Operating system release: ', release)

//operating system type
const type = os.type()
console.log('Operating system type: ', type)

//operating system uptime in number of seconds
const uptime = os.uptime()
console.log('Operating system uptime: ', uptime, 'seconds,', uptime / 60 / 60, ' hour')

//information of current effective user
const userinfo = os.userInfo()
console.log('User information: \n', userinfo)