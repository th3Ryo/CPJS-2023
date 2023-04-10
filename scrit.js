//css h1 { color:red }
/*
.parrafito {....}
#pid {....}   */



const h1 = document.querySelector(`h1`);
const p = document.querySelector(`p`);
const parrafo = document.querySelector(".parrafo");
const pid = document.querySelector("#pid");
const input = document.querySelector(`input`);




console.log({
    h1,
    p,
    parrafo,
    pid,
    input,
}
);

console.log(input)
console.log(input.value)

//propiedad para cambiar el h1 EN html con js
h1.innerHTML = "GOJO"

//propiedad para cambiar el h1 EN html con js
h1.innerText     = "GOJO <br> satoru"

/*
//leer un atributo a una clase
h1.getAttribute("pantalla");
console.log(h1.getAttribute("pantalla"));

//modificar un atributo a una clase (parametro original, parametro cambiado)
h1.setAttribute("pantalla","atributo");
console.log(h1.getAttribute("pantalla"));
*/

//agregar atributo de clase
h1.classList.add("2")

//eliminar atributo
h1.classList.remove("2")

//h1.classList.toggle
//h1.classList.contains

//cambio de valor directamente
input.value = "321"

//crear documento desde 0

// ejemplo console.log(document.createElement("img"));

const img = document.createElement("img");
//explicacion (parametro original, parametro cambiado)
img.setAttribute(`src`, "https://media.tenor.com/jjMcj2k7U5MAAAAd/gojo-gojo-satoru.gif");
console.log(img)

//insertar imagen en un contenedor en este caso pid
pid.append(img);

//otro metodo de insercion
pid.replaceWith(img);
