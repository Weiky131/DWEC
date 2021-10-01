//ejercici 1
function parImpar(a){
    let par;

    if (a % 2 == 0) {
        par = true;

    }else{
        par = false;

    }

    return par;
}

console.log(parImpar(5));
console.log(parImpar(10));


//ejercici 2
function majusMinus(cadena){

    const tipus = {
    "minuscules": /^[a-z]+$/,
    "majuscules": /^[A-Z]+$/,
    "barrejat": /^[A-Za-z]+$/
    }

    if (tipus.minuscules.test(cadena)) {
        console.log("La cadena esta formada per minuscules.")

    } else if (tipus.majuscules.test(cadena)) {
        console.log("La cadena esta formada per majuscules.")

    } else if (tipus.barrejat.test(cadena)) {
        console.log("La cadena esta barrejada amb majuscules i minuscules.")

    } else {
        console.log("La cadena conte caracters que no son lletres.")

    }
}

majusMinus("hola mundo");
majusMinus("HOLA MUNDO");
majusMinus("Hola Mundo");
majusMinus("Hola Mundo1234");


//ejercici 3
function palindromo(cadena){

    const cadenaRevertida = cadena.toLowerCase().split("").reverse().join("");

    if (cadenaRevertida === cadena.toLowerCase()) {
        console.log("Es palindromo.")

    } else {
        console.log("No es palindromo.");
    }

}

palindromo("hola");
palindromo("Hola y aloH");