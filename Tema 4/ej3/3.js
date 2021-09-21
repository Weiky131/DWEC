var i = 0;
while(i < 1){
    var pais = prompt("Introdueix un Pais per a saber la CAPITAL i sortir per a sortir.")
    pais = pais.toLocaleLowerCase();
    
    switch (pais) {

        case "albania":
            alert("Tirana");        
            break;
        
        case "alemania":
            alert("Berlin")
            break;

        case "andorra":
            alert("Andorra la Vella")
            break;

        case "belgica":
            alert("Bruselas")
            break;
        
        case "bulgaria":
            alert("Sofia")
            break;
        
        case "dinamarca":
            alert("Copenhague")
            break;

        case "finlandia":
            alert("Helsinki")
            break;

        case "españa":
            alert("Madrid")
            break;

        case "francia":
            alert("Paris")
            break;

        case "italia":
            alert("Roma")
            break;

        case "irlanda":
            alert("Dublin")
            break;

        case "lituania":
            alert("Vilnius")
            break;

        case "luxemburgo":
            alert("luxemburgo")
            break;

        case "malta":
            alert("La Valeta")
            break;

        case "noruega":
            alert("oslo")
            break;

        case "polonia":
            alert("Varsovia")
            break;

        case "sortir":
            alert("adeu!")
            i++;
            break;

        default:
            alert("El pais que has introduit no existix o no consta en l'aplicacio.")
            break;
    }

}