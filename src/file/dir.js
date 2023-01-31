const fs = require('node:fs')
console.log(fs)

// 异步的方式，callback 
// 目录的创建
fs.mkdir(`${__dirname}/dir`,(err,dirpath) => {
    if(err) {
        console.log(err)
    }else {
        console.log(dirpath)
    }
})


// 删除文件夹
fs.rmdir(`${__dirname}/dir`,(err) => {
    if(err) {
        console.log(err)
    }
})

// 读文件夹下的文件
fs.readdir(__dirname,(err,files) => {
    console.log(files)
})