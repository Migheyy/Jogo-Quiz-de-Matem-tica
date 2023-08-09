function addUser(){
    nomeJogador1 = document.getElementById("nomeJogador1").value;
    nomeJogador2 = document.getElementById("nomeJogador2").value;

    localStorage.setItem("nj1", nomeJogador1);
    localStorage.setItem("nj2", nomeJogador2);

    window.location="game.html";
}