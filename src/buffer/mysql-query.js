
const  {Buffer } = require('node:buffer')

const buf = Buffer.from([0, 0, 11, 1, 72, 101, 108, 108, 111, 32, 119, 111, 114, 100, 33])


const part = buf.readInt16BE(0)
const payloadLength = (part << 8) + buf.readInt8(2)
const payloadMsg = buf.slice(4,payloadLength+5).toString('ascii')
console.log(payloadMsg)

// 如何做解析
 