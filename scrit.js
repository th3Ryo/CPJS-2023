const h1 = document.querySelector(`h1`);
const form = document.querySelector(`#form`);
const entrada1 = document.querySelector(`#dato0`);
const entrada2 = document.querySelector("#dato1");
const btn = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");

//permite escuchar solo editando el js los parametros son evento para este caso evento clik, y funcion o que quiere que hagamos
form.addEventListener(`submit`,sumarValores);

//escuchar eventos, ejemplo onclik onchange
 function sumarValores (event) {
   //el evento preventDefaul permite que el submid se quede sin hacer la actualizacion ya que por defecto a penas se clickea esta configurado para que se actulice el preven permite que lo sostenga por mas tiempo
  
   event.preventDefault();
   sumardatos = dato0.value+dato1.value;
    resultado.innerText = "Resultado: " + sumardatos;
 };
 //atajo para comentar