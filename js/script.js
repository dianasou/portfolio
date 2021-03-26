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

// set active class to button when clicked in navbar
const currentLocation = location.href;
const menuItem = document.querySelectorAll(".nav-link");
const menuLength = menuItem.length

for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "active"
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

// button to go back to top
backToTopButton = document.querySelector("#backTopBtn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  // return distance from top
  if (window.pageYOffset > 300) {
    //show button
    backToTopButton.style.display = "block";
  }
  else {
    //hide button
    backToTopButton.style.display = "none";
  }
}

//scroll to top when user clicks button
backToTopButton.addEventListener("click", scrollUp);

function scrollUp () {
  window.scrollTo(0, 0);
}
