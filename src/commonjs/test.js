// 模块的定义
const module = {
    exports: null
}

const exports = module.exports

module.exports = {}

// 直接更改了对象的引用,这是错误的写法
exports = {}