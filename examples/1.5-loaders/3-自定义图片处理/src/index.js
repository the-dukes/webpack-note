var src = require('./webpack.png')
console.log(src)
var img = document.createElement('img')
img.src = src
document.body.appendChild(img)
