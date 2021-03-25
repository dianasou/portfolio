console.log("Hello world");

//personal message to readers
console.log("This is Diana. Welcome to my portfolio!");

// menuToggle function shows nav when clicked
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navbar') {
    //add responsive to className to show menu
    x.className += ' responsive';
  } else {
    //change className back to hide menu
    x.className = 'navbar';
  }
}

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
