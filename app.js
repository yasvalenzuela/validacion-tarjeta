//var numbersTarjet = prompt("Ingrese el número de su tarjeta");
function isValidCard (number){
	
	do{
		var numbersTarjet =prompt("Ingrese los números de su tarjeta de crédito");
		if(numbersTarjet === ""){
			
				alert("Ingrese solo números por favor");
			
			
				
			}

		}while(numbersTarjet === "");
		
		//var reverse = function(array)//creo una funcion
		  
		
		var size = numbersTarjet.length; //creo una variable que se llame tamaño y eso sera la longitud de mi array original
		var lastPosition = size-1; //con esta variable obtendre la ultima posicion del elemento del array original
		for(var i=lastPosition; i>=0; i--){ //creo un for para que recorra los elementos del array pero desde la ultima posicion y llegue a la posicion cero
		var array = parseInt(numbersTarjet.charAt(i)); //paso de string a number
		var newArray = [];
		newArray.push(array); //con push agrego variable con el array vacio los elementos uno en uno pero cambia el orden la ultima posicion sera la primera y asi...
		} 
		 
		for(var j=1; j<newArray.length; j++){
			if(j % 2 === 0){
				var numbersPar = newArray[j -1] * 2;//j-1 porque j es 1 segun metodo luhn y -1 es porque es el indice normal o sea 0
				if(numbersPar > 10){

				}
				

			}
		}
		/*
		este es mas sencillo deberia practicarlo
		var size = numbersTarjet.length;
		var lastPosition = size-1;
		//var size = numbersTarjet.length;
		for(var i= lastPosition; i > 0; i--){
		*/
			
			

		}
		
 
	

    

    
	//var numbersTarjet = prompt("¿Cuales son los números de tu tarjeta?");
	//var chain = numbersTarjet.toString(); //convierte numbers en string
	//var long = numbersTarjet.length; //longitud
	//var add =0;	//donde se guardara los resultado de la suma
     /*
	var array = //Array.from(numbersTarjet).reverse(); //arreglo donde quedara la cadena al reves
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

	 
