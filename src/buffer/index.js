const {Buffer} = require('node:buffer')


// 创建buffer
// 创建一个长度为5的buffer:，创建一段内存，大小为5个byte
const buf = Buffer.alloc(5)

buf[0] = 255
console.log(buf)
const msg = Buffer.from([72,101,108,108,111,32,119,111,114,100,33])
console.log(msg.toString('ascii'))

