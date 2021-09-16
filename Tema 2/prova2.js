function diesSetmana(){

  var dies = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"];

  for (i in dies) {

    window.alert (dies[i]);

    i++;
    }
}

function simples(){

  window.alert("'Hola mon!'");

}

function dobles(){

  window.alert('"Hola mon!"')
}

function saludar(){

  var nom = prompt("Quin es el teu nom?");

  window.alert("Bon dia " + nom)

}
