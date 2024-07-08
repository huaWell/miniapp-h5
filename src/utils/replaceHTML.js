let replaceHTML = html => {
  return html && html.replace(/<\/?.+?>/g,"").replace(/ /g,"")
}

export default replaceHTML;