var lletresDni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F',
'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C',
'K', 'E', 'T'];

var numero = prompt("Donam el numero del dni");
var lletra = prompt("Donal la lletra del dni");
lletra = lletra.toUpperCase();

if (numero < 0 || numero > 99999999){
    alert("Has introduit un numero erroni")

} else {
    var lletraCalc = lletresDni[numero % 23];

    if(lletraCalc != lletra) {
      alert("La lletra o el numero introduits no son correctes");

    } else {
      alert("El numero y la lletra del DNI son correctes");

    }

    console.log(lletraCalc);
  }

