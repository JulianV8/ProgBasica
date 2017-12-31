var teclas = {
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);

var cuadrito = document.getElementById("dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("blue", 149, 149, 151, 151, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colorsito = "red";
  var movimiento = 1;
  switch (evento.keyCode) {
    case teclas.UP:
      console.log("Arriba");
      dibujarLinea(colorsito, x, y, x, y - movimiento, papel)
      y = y - movimiento
      break;
    case teclas.DOWN:
      console.log("Abajo")
      dibujarLinea(colorsito, x, y, x, y + movimiento, papel)
      y = y + movimiento
      break;
    case teclas.LEFT:
        console.log("Izquierda")
        dibujarLinea(colorsito, x, y, x - movimiento, y, papel)
        x = x - movimiento
      break;
    case teclas.RIGHT:
        console.log("Derecha")
        dibujarLinea(colorsito, x, y, x + movimiento, y, papel)
        x = x + movimiento
      break
  }
}
