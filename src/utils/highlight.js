import uniq from 'lodash.uniq'
// 
import {isNull, isUndefined} from '@/utils/type'



export default (value, keywords=[]) => {

	if (isNull(value) || isUndefined(value)) {
		return value;
	}
	let _keywords = [];

	/* 过滤掉 keywords 里面的空值 */
	keywords = keywords.filter(v => {
		return v.trim()!==''
	})



	/* 首先拿到所有 keywords 的大小写 */
	keywords.forEach(word => {
		_keywords.push(word.toLowerCase(), word.toUpperCase());
	});
	/* 然后去重 */
	_keywords = uniq(_keywords);
	_keywords.sort((a, b) => {
		return b.length - a.length
	})
	/* 构建一个 全部是 0 的 list, 长度为 value 的长度 */
	let list = []
	for (let k = 0; k < value.length; k++) {
		list.push(0)
	}



	let fn = (word, fromIndex=0) => {
		let index = value.indexOf(word, fromIndex)
		if (index > -1) {
			let endIndex = index + word.length
			for (let k = index; k<endIndex; k++) {
				list[k] = 1;
			}
			fn(word, endIndex)
		}
	}


	_keywords.forEach(word => {
		fn(word)
	})



	let valueList = value.split('')
	list.forEach((item,index) => {
		if (item) {
			valueList[index] = `<b class="highlight">${valueList[index]}</b>`
		}
	})
	return valueList.join('')
}