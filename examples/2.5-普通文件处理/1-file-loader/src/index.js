const png = require('./webpack.png').default

const img = document.createElement('img')
img.src = png
document.body.appendChild(img)
