console.log("Hello world");

//personal message to readers
console.log("This is Diana. Welcome to my portfolio!");

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    //add responsive to classname if menu isn't shown to show menu
    x.className += ' responsive';
  } else {
    //change className back to navtoggle
    x.className = 'navtoggle';
  }
}
