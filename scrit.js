const h1 = document.querySelector(`h1`);
const entrada1 = document.querySelector(`#dato0`);
const entrada2 = document.querySelector("#dato1");
const btn = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");

//escuchar eventos, ejemplo onclik onchange
 function btnOnclik (){
   //console.log(`se clickeo el boton y entro la funcion`)
    sumardatos = dato0.value+dato1.value;
    resultado.innerText = "Resultado: " + sumardatos;
 };