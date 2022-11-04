var replay = document.getElementById("he2")

replay.onclick = () => {
    location.href = "./game.html";
}

var pname = localStorage.getItem('p1');
document.getElementById('beta').innerHTML = pname;


var output = localStorage.getItem('scoreboard');
document.getElementById('scoreoutput').innerHTML = output;
