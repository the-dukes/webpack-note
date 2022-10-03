const big = require('./big.png').default
const small = require('./small.png').default

const imgBig = document.createElement('img')
imgBig.src = big
document.body.appendChild(imgBig)

const imgSmall = document.createElement('img')
imgSmall.src = small
document.body.appendChild(imgSmall)
