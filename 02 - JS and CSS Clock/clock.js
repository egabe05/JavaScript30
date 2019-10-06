const clockOffset = 90
const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')

function handTransformSetter(handElement, degrees) {
    if (degrees === clockOffset) {
        handElement.classList.add('notransition')
    } else {
        handElement.classList.remove('notransition')
    }
    handElement.style.transform = `rotate(${degrees}deg)`
}

function setDate() {
    const now = new Date()
    const hourDegrees = ((now.getHours() / 12) * 360) + clockOffset 
    const minDegrees = ((now.getMinutes() / 60) * 360) + clockOffset
    const secondsDegrees = ((now.getSeconds() / 60) * 360) + clockOffset
    
    handTransformSetter(hourHand, hourDegrees)
    handTransformSetter(minHand, minDegrees)
    handTransformSetter(secondHand, secondsDegrees)
}

setInterval(setDate, 1000)