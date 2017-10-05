# VALIDACION DE TARJET

## Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn. Lee este blog que explica cómo funciona el algoritmo de Luhn.

### pseudocodigo
```
#### defino mi funcion:
+ function isValidCard: con esta funcion se validara una tarjeta.
- creo una varibale llamada numbersTarjet en donde pido al ususario que ingrese los números de su tarjeta a traves de un prompt
- dentro de la funcion creo un bucle do...while para que el usuario si o si ingrese lo que se le pide
- si no ingresa nada se genera una alerta que le pida que ingrese solo numeros, esto se repite hasta que el usuario ingrese un numero
- creo una variable llamada size que sera igual a la longitud de la variable numbersTarjet
- creo una variable llamada lastPosition que sera size-1, con esta variable obtendre la ultima posicion
- genero un ciclo for que recorra la varibale numbersTarjet pero de atras para adelante
- creo una variable llamada array en donde pasare los datos ingresados por el usuario de string a number, ya que todo lo que pida mediante prompt entrega un dato tipo string
- creo una variable llamada newArray que es tipo array vacia
- luego mediante push agrego los datos guardados en mi variable array a mi variable vacía 
- ahora inicio otro ciclo for pero ahora que recorra normal, es decir desde mi primera posición
	- si el indice al dividirlo por dos da como residuo 0, es par
		- creo una variable llamada numbersPar que es igual al indice de newArray -1 *2, (-1 porque la posición para el metodo Luhn comienza de 1 y aca necesito que el indice sea cero)
		- si numbersPar es mayor a 10 
			- separo los digitos y los sumo 
			- ahora creo otra variable en donde guarde los numeros impares y los nuevos digitos de los pares
			- inicio un ciclo for para que recorra mi nueva variable con los digitos actualizados
			- creo una variable tipo array vacia en donde se guardara la suma de todos los numeros
			- sumo todos los elementos del array y mediante push agrego el resultado de la suma a mi variable vacia
			- si mi variable vacia al dividirla por 10 da como residuo 0 
			- retorna una alerta que diga tu tarjeta es válida
			- si no da 0 
			- retorna una alerta que diga tu tarjeta no es valida y se inicia el bucle do...while del inicio.













