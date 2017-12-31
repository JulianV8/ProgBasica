class Pakiman
{
  constructor(n, v, a)
  {
    this.imagen = new Image();
    this.nombre = n
    this.vida = v
    this.ataque = a
    this.imagen.src = imagen[this.nombre];
  }
  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<br /><strong>" + this.nombre + "</strong><br />");
    document.write("Vida:" + this.vida + "</strong><br />");
    document.write("Ataque:" + this.ataque + "</strong><br />");
    document.write("<hr /><p>");
  }
}
