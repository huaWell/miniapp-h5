export default path => {
	localStorage.setItem(path, document.body.scrollTop || document.documentElement.scrollTop)
}