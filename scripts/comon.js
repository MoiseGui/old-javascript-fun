document.getElementById("music").volume = 0.0;
function mute() {
  bt = document.getElementById("mute");
  doc = document.getElementById("music");
  if (bt.innerHTML == "MUTE") {
    bt.innerHTML = "SON";
    doc.volume = 0.0;
  } else {
    bt.innerHTML = "MUTE";
    doc.volume = 1.0;
  }
  init();
}

function pauseMusic() {
  doc = document.getElementById("music");
  doc.pause();
}

function playMusic() {
  doc = document.getElementById("music");
  doc.play();
}
