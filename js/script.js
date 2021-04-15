// personal message to readers
console.log('This is Diana. Welcome to my portfolio!')

function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    // add responsive to className to show menu
    x.className += ' responsive'
  } else {
    // change className back to hide menu
    x.className = 'navtoggle'
  }
}

// set active class to button when clicked in navbar: https://youtu.be/7Vr1bngah-k
const currentLocation = location.href
const menuItem = document.querySelectorAll('.nav-link')
const menuLength = menuItem.length

for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = 'active'
  }
}

// create lightbox for thumbnail images: https://youtu.be/uKVVSwXdLr0
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('.thumbnail')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})

// button to go back to top: https://youtu.be/gphMli74Chk
const backToTopButton = document.querySelector('#backTopBtn')

window.addEventListener('scroll', scrollFunction)

function scrollFunction () {
  // return distance from top
  if (window.pageYOffset > 300) {
    // show button
    backToTopButton.style.display = 'block'
  } else {
    // hide button
    backToTopButton.style.display = 'none'
  }
}

// scroll to top when user clicks button
backToTopButton.addEventListener('click', scrollUp)

// smooth scroll when back to top clicked
function scrollUp () {
  const targetPosition = 0
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  const duration = 750
  let start = null

  window.requestAnimationFrame(step)

  function step (timestamp) {
    if (!start) start = timestamp
    const progress = timestamp - start
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration))
    if (progress < duration) window.requestAnimationFrame(step)
  }

  function easeInOutCubic (t, b, c, d) {
    t /= d / 2
    if (t < 1) return c / 2 * t * t * t + b
    t -= 2
    return c / 2 * (t * t * t + 2) + b
  }
}
