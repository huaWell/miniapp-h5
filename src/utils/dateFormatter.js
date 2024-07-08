/*
	接受一个时间戳
	然后将其转换成一个 year/month/day 这种格式的值
*/

import getTimeObj from './getTimeObj'

export default ts => {
	let t = getTimeObj(ts)
	return `${t.year}/${t.month}/${t.day}`
}