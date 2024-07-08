/*
定义一个函数,
自己去解析 url 中 hash 后面的 query
之所以要有这么一个函数, 是因为在 main.js 中我们拿不到 $route 对象

函数不接受参数, 默认就是去解析 location.href 
*/
import qs from 'querystring'

let routeQuery = ()=> {
	console.log("location href")
	console.log(location.href)
	return qs.parse(location.href.split('#')[1].split('?')[1])
}
export default routeQuery