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
/* 
apuntes gifhub juan david

github 

new repository

nombre del repositorio creado

descripcion del repositorio

en clase no creana nada de archivos desde la pagina

1 git ini -- inicializa el git

ls -lf -- muestra todas las carpetas incluidas las acultas

crear de forma manual el gitignore -- para las carpetas que desea ignorar ej .vscode
se recomierda visitar gitignore.io hay se debe aplicar tags
ejemplo
winwows, mac linix vscode node etc y se le da crear

2 git add .gitignore

3 git status -- es para  verificar que carpetas esta tendo del gib

para este caso se va a la seccion de vscode 
el agrega una linea con "".vscode" para que no suba nada de archivos de git
 
4 git add -A

5 git commit -m "primer texto"

6 git remote -- verificar que no esta enlazado a ningun link

7 git branch -M main

8 git remote ..... el link sale del gif

9 git push -u origin main
  */