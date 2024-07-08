let ua = navigator.userAgent.toLowerCase();

function isWechat() {

  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  } else {
    return false;
  }
}

function isQQ() {
  if (ua.match(/QQ/i) == "qq") {
    return true;  
  }
  return false;
}

function isAndroid() {
  return ua.indexOf('android')  >  -1 
}

function  isiOS() {
  return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i);  //ios终端 
}

export default {
  isWechat,
  isQQ,
  isAndroid,
  isiOS
}