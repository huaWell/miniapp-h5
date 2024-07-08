function support(property, value) {
  /* 浏览器前缀列表 */
  let vendors = ['', '-webkit-', '-ms-', '-moz-', '-o-'];
  let div = document.createElement('div');
  let flag = false;
  /* 原理:
  	设置元素的指定属性 为 指定的属性值
  	在设置之后, 再取元素的属性值
  		如果支持, 则元素的属性值就是刚才设置的属性值
  		如果不支持, 则元素的属性值为空
  */
  vendors.forEach(vendor => {
    div.style[`${vendor}${property}`] = `${value}`;
    if (div.style[property]) {
      flag = true;
    }
  });
  return flag;
}

let supportSticky = () => {
  return support('position', 'sticky');
}

export {
	support,
	supportSticky
}