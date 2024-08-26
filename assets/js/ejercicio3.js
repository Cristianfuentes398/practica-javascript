function suma(){
    let valor1 = document.querySelector("#valor1").value;
    let valor2 = document.querySelector("#valor2").value;
    let resultado = parseFloat(valor1) + parseFloat(valor2);
    document.querySelector(".resultado").innerHTML= resultado;
}
function resta(){
    let valor1 = document.querySelector("#valor1").value;
    let valor2 = document.querySelector("#valor2").value;
    let resultado = parseFloat(valor1) - parseFloat(valor2);
    if (resultado < 0){
        let resultado=0;
        document.querySelector(".resultado").innerHTML= resultado;
    }
    else{
        document.querySelector(".resultado").innerHTML= resultado;
    }
};