var vp = document.getElementById('villaplatzi');
var papel = vp.getContext("2d");
var mapa = "tile.png";

var fondo = {
  url: "tile.png",
  cargaOK: false
};
var vaca = {
  url: "vaca.png",
  cargaOK: false
};
var pollo = {
  url: "pollo.png",
  cargaOK: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = mapa;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = "vaca.png"
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = "pollo.png"
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = "cerdo.png"
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}
function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}
function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK == true)
  {
      papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK == true)
  {
    var cantidad = aleatorio(0, 8)
    console.log(cantidad + "vacas");
    for(v=0;v<cantidad;v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      x = x * 60;
      y = y * 60
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if(pollo.cargaOK == true)
  var cantidad = aleatorio(0, 25);
  console.log(cantidad + "pollos");
  for(p = 0; p < cantidad; p++)
  {
    var x = aleatorio(0, 7);
    var y = aleatorio(0, 7);
    x = x * 60;
    y = y * 60
    papel.drawImage(pollo.imagen, x, y);
  }
  if(cerdo.cargaOK == true)
  var cantidad = aleatorio(0, 15);
  console.log(cantidad + "cerdos");
  for(c = 0; c < cantidad; c++)
  {
    var x = aleatorio(0, 7);
    var y = aleatorio(0, 7);
    x = x * 60;
    y = y * 60
    papel.drawImage(cerdo.imagen, x, y);
  }
}
//Numeros aleatorios
var z;
for(i=0;i<20;i++)
{
  z = aleatorio(0, 20);
  document.write(z + ", ");
}

function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
