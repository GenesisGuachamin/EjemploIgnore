//Mas recomendable, 
const otracosa = "String"

//No se recomienda, permite llamadas desde cualquier lado
var otracosa1
otracosa1 = 10
function nombre(nombre) {
    let otracosa2
}

const titulo = document.querySelector("li:nth-child(2)")

const formulario = document.querySelector("form")
// console.log(formulario)
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault()
    if (formulario["nombre"].value === "Genesis" && formulario["apellido"].value === "Guachamin" && formulario["clave"].value === "12345") {
        alert("Datos correctos")
    } else {
        alert("Datos incorrectos")
    }

})


titulo.textContent = "SORTILA"

// console.log(titulo)

