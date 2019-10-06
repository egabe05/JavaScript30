
function playSound(e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return // stop function from running if no corresponding audo
    audio.currentTime = 0  // rewind to the start
    audio.play()
    key.classList.add('playing')
}

function removeTransition(e) {
    if (e.propertyName != 'transform') return // skip if its not a transform
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)
