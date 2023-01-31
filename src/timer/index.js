let count = 0
const timeId = setInterval(() => {
    console.log('哈哈哈')
    count++
    if(count ===3){
        // 定时器取消
        clearInterval(timeId)
    }
},2000)


