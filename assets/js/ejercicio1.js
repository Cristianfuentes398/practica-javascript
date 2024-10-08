let form = document.getElementById("formulario");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    limpiarErrores();
    let textNombre =document.querySelector("#nombre").value;
    let textAsunto = document.querySelector("#asunto").value;
    let textMensaje = document.querySelector("#mensaje").value;
    let resultado = validar(textNombre, textAsunto, textMensaje);
    if (resultado == true) {
        exito();
    };
});

function limpiarErrores() {
    document.querySelector(".resultado").innerHTML= "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
};
function exito() {
    document.querySelector(".resultado").innerHTML= "Formulario pasó la validación";
};

function validar(nombre, asunto, mensaje) {
    let pasamosLaValidacion = true;
    let validacionNombre = /^[A-Za-z]+$/;
    if (validacionNombre.test(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido"
        pasamosLaValidacion = false;
    };
    let validacionAsunto = /^[A-Za-z]+$/;
    if (validacionAsunto.test(asunto) == false) {
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido"
        pasamosLaValidacion = false;
    };
    let validacionMensaje = /^[A-Za-z]+$/;
    if (validacionMensaje.test(mensaje) == false) {
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido"
        pasamosLaValidacion = false;
    };
    
    return pasamosLaValidacion;
};