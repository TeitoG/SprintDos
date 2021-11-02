function init() {
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var porcentaje = document.getElementById('porcentaje');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var punto = document.getElementById('punto');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }


let form = document.getElementById('form');

form.addEventListener('submit', formSumbit);
    
function formSumbit(e) {
    e.preventDefault();
}
//Eventos onclick
punto.onclick = function (e){
    resultado.textContent = resultado.textContent + ".";
}
uno.onclick = function (e) {
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function (e) {
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function (e) {
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function (e) {
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function (e) {
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function (e) {
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function (e) {
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function (e) {
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function (e) {
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function (e) {
    resultado.textContent = resultado.textContent + "0";
}
reset.onclick = function (e) {
    resetear();
}


function limpiar(){
    resultado.textContent = "";
  }
  function resetear(){
    resultado.textContent = "";
    operandoUno = 0;
    operandoDos = 0;
    total = "";
  }
  function resolver(){
    var res = 0;
    switch(total){
      case "+":
        res = parseFloat(operandoUno
    ) + parseFloat(operandoDos);
        break;
      case "-":
          res = parseFloat(operandoUno
    ) - parseFloat(operandoDos);
          break;
      case "*":
        res = parseFloat(operandoUno
    ) * parseFloat(operandoDos);
        break;
      case "/":
        res = parseFloat(operandoUno
    ) / parseFloat(operandoDos);
        break;
      case "%":
          res = (parseFloat(operandoUno) / 100)*parseFloat(operandoDos);
        break;
            
    }
    resetear();
    resultado.textContent = res;
  }
suma.onclick = function (e) {
    operandoUno = resultado.textContent;
    total = "+";
    limpiar();
}
resta.onclick = function (e) {
    operandoUno = resultado.textContent;
    total = "-";
    limpiar();
}
multiplicacion.onclick = function (e) {
    operandoUno = resultado.textContent;
    total = "*";
    limpiar();
}
division.onclick = function (e) {
    operandoUno = resultado.textContent;
    total = "/";
    limpiar();
}
porcentaje.onclick = function (e) {
    operandoUno = resultado.textContent;
    total = "%";
    limpiar();
}

igual.onclick = function (e) {
    operandoDos = resultado.textContent;
    resolver();


    
}
}