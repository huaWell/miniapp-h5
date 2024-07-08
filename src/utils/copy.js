function copy(value) {
  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  /* 创建一个 input 元素*/
  let input = document.createElement('input');
  document.body.appendChild(input);
  input.value = value;
  input.focus();
  input.select();
  if (document.execCommand('copy')) {
    document.execCommand('copy');
  }
  document.body.removeChild(input);
  window.scrollTo(0, scrollTop)
}