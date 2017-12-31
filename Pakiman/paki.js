var imagen = [];
imagen["vacamon"] = "vaca.png";
imagen["pokacho"] = "pollo.png";
imagen["tocinauro"] = "cerdo.png";

var coleccion = [];

coleccion.push(new Pakiman("vacamon", 100, 26));
coleccion.push(new Pakiman("pokacho", 100, 26));
coleccion.push(new Pakiman("tocinauro", 100, 26));

for (var pakimanes of coleccion)
{
  pakimanes.mostrar();
}
