// back to top button

mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// responsive navbar

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

// music button
var music = new Audio('Assets/audio/astronomia.mp3');
function playMusic(){
  music.play();
  }

  // hiding buttons

  function hide() {
    var div2 = document.getElementById("music");
    div2.style.display = 'block';
    var div = document.getElementById("musicclick");
    div.style.display = 'none';
}

// toggling music

function togglePlay() {
  return music.paused ? music.play() : music.pause();
};

// toggling rotate

