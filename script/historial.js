let mostrarElResultado = document.getElementById("mostrarElResultado")
let mostrarElResultado1 = document.getElementById("mostrarElResultado1")
let mostrarElResultado2 = document.getElementById("mostrarElResultado2")
let botonBorrar = document.getElementById("borrarHistorial")
mostrarHistorial()
let botonPrueba = document.getElementById("botonPrueba")
let mostrarTodo = document.getElementById("resultadosDeEjercicios")
const containerJson = document.getElementById("containerJson")
const esconder = document.getElementById("esconder")
let botonPruebajson = document.getElementById("botonPruebajson")
let botonPruebajson1 = document.getElementById("botonPruebajson1")
let mostrarJson = document.getElementById("mostrarJson")



// se realiza una busqueda del localStorage del dia 1 para traer los ejercicios ingresados en ejercicios.js


function buscarEjerciciosPrimerDia() {
    let ejercicioAMostrarDia1 = JSON.parse(localStorage.getItem(`ejerciciosPrimerDia`)) || [];


    elementoTraido = ejercicioAMostrarDia1.forEach(info => {


        const datosAMostrar = document.createElement("div")
        datosAMostrar.innerHTML = `
                <p>En el ejercicio <span>${info.ejercicio}</span> levantaste <span>${info.kilos}</span> Kilos.</p> 
                `
        mostrarElResultado.appendChild(datosAMostrar)



    });
    if (ejercicioAMostrarDia1 == "") {
        mostrarElResultado.innerHTML = ""
    }

}



// se realiza una busqueda del localStorage del dia 2 para traer los ejercicios ingresados en ejercicios.js

function buscarEjerciciosSegundoDia() {
    let ejercicioAMostrarDia2 = JSON.parse(localStorage.getItem(`ejerciciosSegundoDia`)) || [];
    ejercicioAMostrarDia2.forEach(info => {
        const datosAMostrar = document.createElement("div")
        datosAMostrar.innerHTML = `<p>En el ejercicio <span>${info.ejercicio}</span> levantaste <span>${info.kilos}</span> Kilos.</p> `
        mostrarElResultado1.appendChild(datosAMostrar)
    });
    if (ejercicioAMostrarDia2 == "") {
        mostrarElResultado1.innerHTML = ""
    }
}
// se realiza una busqueda del localStorage del dia 3 para traer los ejercicios ingresados en ejercicios.js

function buscarEjerciciosTercerDia() {
    let ejercicioAMostrarDia3 = JSON.parse(localStorage.getItem(`ejerciciosTercerDia`)) || [];
    ejercicioAMostrarDia3.forEach(info => {
        const datosAMostrar = document.createElement("div")
        datosAMostrar.innerHTML = `<p> En el ejercicio <span>${info.ejercicio}</span> levantaste <span>${info.kilos}</span> Kilos.</p> `
        mostrarElResultado2.appendChild(datosAMostrar)



    });

    if (ejercicioAMostrarDia3 == "") {
        mostrarElResultado2.innerHTML = ""
    }
}



// // Por este apartado se van a mostrar los input

function mostrarHistorial() {

    buscarEjerciciosPrimerDia()
    buscarEjerciciosSegundoDia()
    buscarEjerciciosTercerDia()
}

// funcion para borrar todo el historial



botonBorrar.addEventListener(`click`, (e) => {
    e.preventDefault
    localStorage.removeItem("ejerciciosSegundoDia")
    localStorage.removeItem("ejerciciosPrimerDia")
    localStorage.removeItem("ejerciciosTercerDia")

    mostrarElResultado.innerHTML = "Historial borrado"
    mostrarElResultado1.innerHTML = ""
    mostrarElResultado2.innerHTML = ""

})


// se agarra json y se crea elementos mostrandolo en una ventana emergente
function fetchAbrir() {
    fetch("../script/rutina.json")
        .then((resp) => resp.json())
        .then((data) => {
            data.forEach(info => {
                const datosAMostrarJson = document.createElement("li")
                datosAMostrarJson.innerHTML = `
<h3>${info.titulo}</h3>
<img src="${info.video}">
`
                mostrarJson.appendChild(datosAMostrarJson)
            });
        })
        .catch((error) => console.log(error))

}



// boton para mostrar el json

botonPruebajson.addEventListener(`click`, (e) => {
    e.preventDefault
    containerJson.classList.remove("mostrame")
    mostrarTodo.classList.add("esconder")
    fetchAbrir()

})

// boton para sacar el json

botonPruebajson1.addEventListener(`click`, (e) => {
    e.preventDefault
    containerJson.classList.add("mostrame")
    mostrarTodo.classList.remove("esconder")
    mostrarJson.innerHTML = ""
})