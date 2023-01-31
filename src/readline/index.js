const {stdin,stdout} = require('node:process')

const readline  = require('node:readline')

const rl = readline.createInterface({
    input: stdin,
    output : stdout
})

// rl.question('your name? ', (answer) => {
//     console.log(answer)
// })

// 第一个是数字代表有几行数据
// 下面依次输入数据
let flag = true
let lineCount
let args = []
rl.on('line', (input) => {
    if(flag) {
        lineCount = parseInt(input)
        console.log(typeof lineCount)
        flag = false
    } else {
        args.push(parseInt(input))
        
    }

    // 到达某个实际，执行我们的处理函数
    // if(args.length === lineCount){
    //     exec(args)
    // }
    
})

// 我们自己的数据handle函数
function exec(nums,target) {
    console.log(nums)
}


// TODO: 如果输入的数据是
// 3 // 第一个数组的长度
// 12
// 13
// 14
// 4 // 第二个数组的长度
// 5
// 6
// 7
// 8 9 // 在此时间点，执行我们的处理函数 如果每行数据有不止一个怎么处理