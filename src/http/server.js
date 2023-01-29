const http = require('http')

const port = 3000
const host = '127.0.0.1'

// 1.根据请求路径进行路由
const router = [
    { 
        path: '/', 
        handler: (res,query) => {
            console.log(query)
            res.end(JSON.stringify(query))
        }
    },
    {
        path: '/weather',
        handler: (res,query) => {
            // TODO: 网络请求，数据库查询
            console.log(query)
            res.end(JSON.stringify(query))
        }
    }
]

// 2.查询参数的解析
const server = http.createServer((req, res) => {
    
    const splitUrl = req.url.split('?');
    // splitUrl ['/', 'name=wjx&passwd=123456']
    const inComePath = splitUrl[0]
    const queryPair = {}

    if(splitUrl.length === 2) {
        const query = splitUrl[1]
        query.split('&').forEach(pairStr => {
            const pairArr = pairStr.split('=')
            queryPair[pairArr[0]] = pairArr[1]
        })
    }
    // 路由逻辑
    router.forEach(route => {
        if(inComePath === route.path){
            route.handler(res, queryPair)
        }
    })
    
    
    // // res.end 返回
    // res.end('success')
})

server.listen(port, host, () => console.log('web服务器启动成功，http://127.0.0.1:3000'))