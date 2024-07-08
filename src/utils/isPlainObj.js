/*
用于判断对象是否为空对象
*/

let isPlainObj = obj => {
  let flag = true;
  for (let key in obj) {
    flag = false;
  }
  return flag;
}

export default isPlainObj;