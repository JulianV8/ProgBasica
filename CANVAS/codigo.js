var d = document.getElementById('dibujito');
var texto = document.getElementById('texto');
var boton = document.getElementById('dibujando');
boton.addEventListener("click", dibujarLineasClick);
var lienzo = d.getContext("2d");
var ancho = d.height;
/*
while (l < lineas)
{
  dibujarLinea("red", 50, 80, 100, 90);
  l = l + 1;
}*/

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarLineasClick()
{
  var l = 0;
  var lineas = parseInt(texto.value);
  var yi, xf;
  var colorsito = "grey";
  var xxx = ancho / lineas;

  for (l = 0; l < lineas; l++)
  {
    dibujarLinea("red", 1, yi, xf, 400);
    dibujarLinea("grey", 200, xf, yi, 200);
    dibujarLinea("blue", 400, xf, yi, 1);
    yi = xxx * l;
    xf = xxx * (l + 1);
    console.log(lineas);
  }
  dibujarLinea("red", 1, 1, 1, 400);
  dibujarLinea("grey", 400, 1, 1, 1);
}
