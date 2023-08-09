var nomeJogador1 = localStorage.getItem("nj1");
var nomeJogador2 = localStorage.getItem("nj2");

var pontosJogador1 = 0;
var pontosJogador2 = 0;

document.getElementById("nomeJogador1").innerHTML=nomeJogador1 + ":";
document.getElementById("nomeJogador2").innerHTML=nomeJogador2 + ":";

document.getElementById("pontosJogador1").innerHTML=pontosJogador1;
document.getElementById("pontosJogador2").innerHTML=pontosJogador2;

document.getElementById("jogadorPerguntando").innerHTML="Turno de pergunta - " +nomeJogador1;
document.getElementById("jogadorPerguntando").innerHTML="Turno de resposta - " +nomeJogador1;

function enviar() {
    number1 = document.getElementById("n1").value;
    number2 = document.getElementById("n2").value;
    respostaCorreta = parseInt(number1)*parseInt(number2);

    questionWord = "<h3 id='wordDisplay'> P.  " + number1 + " x " + number2 + "</h4>";
    input_box = "<br>Resposta: <input type='text' id='inputTextBox'>";
    checkButton = "<br><br> <button onclick='check()'>Checar</button>";
    row = questionWord + input_box + checkButton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
}

turnoPergunta = "nomeJogador1";
turnoResposta = "nomeJogador2";

function check(){
    getResposta = Number(document.getElementById("inputTextBox").value);

    if(getResposta==respostaCorreta){
        if(turnoResposta=="nomeJogador1"){
            pontosJogador1=pontosJogador1+1;
            document.getElementById("pontosJogador1").innerHTML=pontosJogador1;
        }
        else{
            pontosJogador2=pontosJogador2+1;
            document.getElementById("pontosJogador2").innerHTML=pontosJogador2;
        }
        if(turnoPergunta=="nomeJogador1"){
            turnoPergunta="nomeJogador2";
            document.getElementById("jogadorPerguntando").innerHTML="Turno de Pergunta - " + nomeJogador2;
        }
        else{
            turnoPergunta="nomeJogador1";
            document.getElementById("jogadorPerguntando").innerHTML="Turno de Pergunta - " + nomeJogador1;          
        }
        if(turnoResposta=="nomeJogador1"){
            turnoResposta="nomeJogador2";
            document.getElementById("jogadorRespondendo").innerHTML="Turno de Resposta - " + nomeJogador2;
        }
        else{
            turnoResposta="nomeJogador1";
            document.getElementById("jogadorRespondendo").innerHTML="Turno de Resposta - " + nomeJogador1;       
        }
document.getElementById("output").innerHTML = "";
    }
}
