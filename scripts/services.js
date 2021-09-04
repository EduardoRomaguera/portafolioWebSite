function play() {
    let audio = document.getElementById("audioOFF");
    audio.volume = 0.5;
    audio.play();
    document.getElementById("audioIconOFF").setAttribute('onclick',  'pause();');
    document.getElementById("audioIconOFF").src="images/musicON.png";
    document.getElementById("audioIconOFF").id="audioIconON";
    document.getElementById("audioOFF").id="audioON";
  }

function pause() {
  let audio = document.getElementById("audioON");
  audio.pause();
  document.getElementById("audioIconON").setAttribute('onclick',  'play();');
  document.getElementById("audioIconON").src="images/musicOFF.png";
  document.getElementById("audioIconON").id="audioIconOFF";
  document.getElementById("audioON").id="audioOFF";
}

function openNav() {
  document.getElementById("leftNavContainer").style.display = "flex";
  document.getElementById("openBtn").style.display = "none";
  document.getElementById("fatherContainer2").style.marginLeft="7%";
}

function closeNav() {
  document.getElementById("leftNavContainer").style.display = "none";
  document.getElementById("openBtn").style.display = "block";
  document.getElementById("fatherContainer2").style.marginLeft = "0%";
}

