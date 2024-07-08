import {Decimal} from 'decimal.js'
export default values => {
	let t = new Decimal(0)
	values.forEach(v => {
		t = t.add(v)
	})
	return t;
}