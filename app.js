
let numeroSecreto= generarNumeroSecreto();
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto)
{
   let elementoHml= document.querySelector(elemento);
   elementoHml.innerHTML=texto;

  

}

function generarNumeroSecreto(){

return Math.floor(Math.random()*10+1);

}


function verificarIntento()
{
   let valorUsuario= parseInt(document.getElementById('valorUsuario').value);
   console.log(valorUsuario);
   console.log(numeroSecreto === valorUsuario);

  return;
}

asignarTextoElemento('h1',"Juego secreto");
asignarTextoElemento('p',"Elija un numero de 1 - 100");