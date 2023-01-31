const {} = require('node:process')

// console.log(process.cwd())
// console.log(process.argv)

// 获取命令行参数
const params = process.argv.slice(2,process.argv.length)
console.log(params)


// 通过环境变量传递一些预设值
console.log(process.env)
if(process.env.NODE_ENV === 'dev') {
    console.log('开发环境')
}

// 每一个新创建的进程都会有拥有的三个问及那描述符，标准输入，标准输出和标准错误
// fd: file description
console.log(process.stdin.fd)
console.log(process.stdout.fd)
console.log(process.stderr.fd)