
const listaDeTeclas = document.querySelectorAll ('.tecla');

//para

for (let contador = 0; contador < listaDeTeclas.lenght; contador++);

const tecla = listaDeTeclas [contador];
const instrumento = tecla.classList[1];
const idAudio = '#som_s(instrumento)'; //template string

//enquanto
while (contador < listaDeTeclas.length ){

listaDeTeclas{0}.onclick = tocaSomPom;

contador= contador + 1;

console.log(contador);

}


function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

while(contador < listaDeTeclas.length){
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_"+efeito;
    listaDeTeclas[contador].onclick = function (){
        tocaSom(idAudio);
    }
    contador = contador + 1;  
}
