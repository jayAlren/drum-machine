window.addEventListener("keydown", keypressed);

const parent = document.getElementsByClassName('drum-pad');
var buttons=document.getElementsByTagName("button");


const displayName = ["Heater 1", "Chord 2", "Chord 3", "Heater 4", "Heater 6", "Disc", "Kick n Hat", "KICK", "Cev"];

console.log(displayName[0])

function play(arg, num) {
  //define length of the parent
  let i = 0;
    for (; i < parent.length; i++) {
      //retrieve child of parent
      const kid = parent[i].children[0];
      //condition if argument is equal to id of child return true
      if (arg == kid.getAttribute('id')) {
        //display name of drum keys
        const thisShow = document.getElementById('show');
        thisShow.innerHTML = displayName[num];
        //then play
        kid.play();
        
        break;
      }
    }
}

 function keypressed(e) {
  for (let i = 0; i < buttons.length; i++) {
    if (e.keyCode == buttons[i].id) {
      const kiddo = parent[i].children[0];
      const names = parent[i].getAttribute('id');
      const thisShow = document.getElementById('show');
      thisShow.innerHTML = displayName[names];
      kiddo.play();
      break;
    }
  }
}