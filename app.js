var play = document.getElementById("hey3")

play.onclick = () => {
    location.href = "./game.html";
    const pname = document.getElementById("alpha").value;
    localStorage.setItem('p1',pname);
}