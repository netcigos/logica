
let numeroSecreto=0;
let intentos=0;
condicionesInicio();

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
  
   if(numeroSecreto===valorUsuario)
      {
        asignarTextoElemento('p',`Hacertaste el numero en ${intentos} ${(intentos==1) ? "ves" : "veces"}` );
          
        limpiarCaja();
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('intentar').setAttribute('disabled',true);


      }else{

      
      if(numeroSecreto > valorUsuario)
         {
           asignarTextoElemento('p','El numero secreto es mayor')

         }
         else{

          asignarTextoElemento('p','El numero secreto es menor');

         }
         intentos++;
         limpiarCaja();

      }
  

  return;
}
function condicionesInicio()
{
   numeroSecreto=generarNumeroSecreto();
   intentos=1;
   asignarTextoElemento('h1',"Juego secreto");
   asignarTextoElemento('p',"Elija un numero de 1 - 10");
   

}
function limpiarCaja()
{
   document.querySelector('#valorUsuario').value='';

}

function reiniciarJuego()
{
  limpiarCaja();
  condicionesInicio();
  document.querySelector('reiniciar').setAttribute('disabled',true);
}


