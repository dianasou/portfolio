console.log("Hello world");

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
<<<<<<< HEAD

//return node list that match group of selectors for side nav
let mainNavLinks = document.querySelectorAll(".sidenav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

//side nav to scroll to section
window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });

});

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
=======
>>>>>>> parent of 8672b88 (Add side nav)
