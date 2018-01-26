// var numbersTarjet = prompt("Ingrese el número de su tarjeta");
function isValidCard(number) {
  do {
    // con el prompt le pido al usuario que ingrese el numero de su tarjeta
    var numbersTarjet = prompt('Ingrese los números de su tarjeta de crédito');
    var conditionNumbers = (/[^0-9-\s]+/); // esta expresion regular verifica que sean numeros
    if (conditionNumbers.test(numbersTarjet) || numbersTarjet === '') {
      alert('Ingrese solo números por favor');
    }
  } while (numbersTarjet === '');
  // console.log(numbersTarjet);

  var newArray = [];
  var size = numbersTarjet.length; // creo una variable que se llame tamaño y eso sera la longitud de mi array original
  var lastPosition = size - 1; // con esta variable obtendre la ultima posicion del elemento del array original
  for (var i = lastPosition; i >= 0; i--) { // creo un for para que recorra los elementos del array pero desde la ultima posicion y llegue a la posicion cero
    newArray.push(parseInt(numbersTarjet[i])); // parseInt paso de string a number
    // con push agrego variable con el array vacio los elementos uno en uno pero cambia el orden la ultima posicion sera la primera y asi...
  }
  // console.log(newArray);

  var add = 0;
  for (var j = 0; j < newArray.length - 1; j++) { // recorro el nuevo arreglo con los numeros invertidos
    if (j % 2 === 0) { // posicion par
      var numbersPar = newArray[j] * 2; // numeros de posicion par se multiplican por 2
      if (numbersPar >= 10) { // si estos numeros son mayor o igual a 10 se separan en digitos y se suman
        numbersPar = numbersPar.toString(); // los paso a string para separarlos
        var firstDigit = parseInt(numbersPar[0]); // llamo al primer digito
        var secondDigit = parseInt(numbersPar[1]); // llamo al segundo digito
        newArray[j] = firstDigit + secondDigit; // los sumo
      } else {
        newArray[j] = numbersPar; // sino se mantiene el numero
      }
    }
  }
  // recorro el arreglo con los numeros nuevos
  for (m = 0; m < newArray.length; m++) {
    add = add + newArray[m]; // los sumo y quedan en a variable add
  }
  if (add % 10 === 0) {
    return alert('el número de su tarjeta es válido');
  } else if (add % 10 !== 0) {
    return alert('el número de su tarjeta no es válido');
  }
}
/*
		este es mas sencillo deberia practicarlo
		var size = numbersTarjet.length;
		var lastPosition = size-1;
		//var size = numbersTarjet.length;
		for(var i= lastPosition; i > 0; i--){
*/

// var numbersTarjet = prompt("¿Cuales son los números de tu tarjeta?");
// var chain = numbersTarjet.toString(); //convierte numbers en string
// var long = numbersTarjet.length; //longitud
// var add =0;
// donde se guardara los resultado de la suma
/*
var array = // Array.from(numbersTarjet).reverse(); //arreglo donde quedara la cadena al reves
var newArray =[]; //quedaran guardadas los nuevos numeros
for(var i = 0; i < array.length; i++){
newArray.push(parseInt(array[i]));
}

		if(array[i] % 2 === 0){
			newArray = array[i] *2;
			if(array[i] % 2 !== 0){
				newArray = array[i];
			}
			return newArray;

		}
		for(var j=1; j < long; i++){
			add += newArray[j];
		}
		if(add %10 === 0){
			alert("Tú tarjeta es válida");
		}else{
			alert("Él número de tarjeta no es válido");
  }
}
*/

isValidCard();