const url = new URL('https://www.chrisjx.cn/login?name=wjx')
console.log(url.hostname)
console.log(url.pathname)
console.log(url.searchParams)

const val = url.searchParams
console.log(val.get('name'))


