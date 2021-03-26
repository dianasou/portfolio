//personal message to readers
console.log("This is Diana. Welcome to my portfolio!");

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    //add responsive to className to show menu
    x.className += ' responsive';
  } else {
    //change className back to hide menu
    x.className = 'navtoggle';
  }
}

// create lightbox for thumbnail images
const lightbox = document.createElement("div")
lightbox.id = "lightbox"
document.body.appendChild(lightbox)

const images = document.querySelectorAll(".thumbnail")
images.forEach(image => {
  image.addEventListener("click", e => {
    lightbox.classList.add("active")
    const img = document.createElement("img")
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener("click", e => {
  if(e.target !== e.currentTarget) return
  lightbox.classList.remove("active")
})
