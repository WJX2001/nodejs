const fs = require('node:fs')

// 同步的逻辑会阻塞后续代码的执行
const result = fs.mkdirSync(`${__dirname}/dirSync`)
console.log(result)




