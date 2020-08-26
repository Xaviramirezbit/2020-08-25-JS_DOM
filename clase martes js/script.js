/*metodo para mostrar mensajes*/
function mensajeAlert() {
alert("Hola mundo apestado");
}

/*prompt*/

function cajitaDeTexto(){
    var nombre= prompt('Ingrese su nombre');
    document.write("<h1> Su Nombre es" + nombre + "</h1>")
}

/*Confirm */

function confirmar(){
    var respuesta=confirm("Está seguro que desea eliminar el archivo?")

    if (respuesta == true) {
        alert("Archivo eliminado correctamente");
    } else {
        alert("Archivo no eliminado");
    }
}

function consola(){
    console.log("la estás cagando jajajaja");
}

var imagen= document.getElementById("imagen");

imagen.addEventListener("click", ()=>{ /*()=>funcion flecha*/

    /*alert("Soy el dom");*/
    /*Modificación del CSS*/
    imagen.style.width= "1000px"
    imagen.style.border= "5px solid black"
})

/* Mouse*/

var box= document.getElementById("box");

box.addEventListener("mouseenter", ()=>{
    box.classList.replace("box","cambio1")

})
box.addEventListener("mouseleave", ()=>{
    /* el primer parametro es la clase existente o actual y el segundo parametro es lo que lo va a reemplazar */

    box.classList.replace("cambio1","box")
})
/* eventos de mouse*/
box.addEventListener("mousemove",()=>{
    console.log("El mouse see está moviendo loca")
})

box.addEventListener("mousedown", ()=>{
    console.log("Has dado click")
})

box.addEventListener("mouseup", ()=>{
    console.log("Has levantado el click dentro del div")
})

/* Eventos de teclado*/

var teclado= document.getElementById("teclado");

/*teclado.addEventListener("keydown", ()=>{
    console.log("oprimiste una tecla")
})

teclado.addEventListener("keypress", ()=>{
    console.log("tienes la tecla oprimida")
}) */

teclado.addEventListener("keyup", (event)=>{
    console.log(event.key)
    
    
    if (event.key.toLowerCase() == "w" ){
        alert("Vas hacia adelante")
    }
})

/* objeto evento*/

var padre= document.getElementById("padre");

padre.addEventListener("click", (event)=>{
    console.log(event.target.textContent)
    /*event.target.style.background="red"*/
    event.target.classList.add("color")

})

/* crear elemento dentro de un nodo o etiqueta*/

var lista= document.getElementById("lista");
var agregar= document.getElementById("agregar");

agregar.addEventListener("click", ()=>{
    var texto= document.getElementById("texto").value;
    /* trae el txto o informacion ingresada dentro de imput*/

    var etiqueta= document.createElement("li");
    /*creacion de etiqueta*/

    etiqueta.textContent= texto;
    /* asignar el varlo de la etiqueta e inserta el texto que tiene el imput*/

    lista.appendChild(etiqueta)

})