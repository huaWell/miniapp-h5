/*
	将类数组对象 array-like 转换成数组
*/
let toArray = arrayLike => {
	return Array.prototype.slice.call(arrayLike);
}
export default toArray;