/*
	将 true 和 false 分别转换成 1 和 0;
	不应该提倡使用类型转换
*/

let toNumber = v => {
	if (v === true) {
		return 1;
	}
	if (v === false) {
		return 0;
	}
	throw new Error('toNumber 提示, 参数错误')
}

export default toNumber;