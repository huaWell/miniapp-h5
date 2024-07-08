let getBase64 = (img, ratio = 1) => {
  let canvas = document.createElement('canvas')
  let context = canvas.getContext('2d');
  let w = img.width / ratio
  let h = img.height / ratio
  canvas.width = w
  canvas.height = h
  context.drawImage(img, 0, 0, w, h)
  return canvas.toDataURL('image/png');
}
export default getBase64