import qs from 'querystring'
export default params => {
	location.href = `${location.protocol}//${location.host}${location.pathname}#/?${qs.stringify(params)}`
}