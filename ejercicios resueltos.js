/ DECLARANDO VARIABLE//

var edad;
var peso;

// DECLARANDO VALORES A LAS VARIABLES//

var edad = 23;
var peso = 70;

// VAR Y LET //

let nombre;
let apellido;
let edad;
let telefono;
let sabeProgramar;

//LAS CONSTANTES//

const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

//UNA VARIABLE DE CADA TIPO//

let verdadero = true;
let nada = null;
let texto = "texto";
let numero = 1234;

//USANDO NUMBER//

let positivo = Number('123');
let negativo = Number(-123);
let decimal = Number(123.123)

//USANDO PARSEINT().JS

const nan= parseInt('nada')
const correcto = parseInt(59.2)

//CREANDO UN OBJETO LITERAL//

let perro = {
    nombre: "Pluto",
    edad: 5,
    vacunado: true
}

// OPERANDO //

let primerNumero = 10;
let segundoNumero = 5;
let resultadoSuma = primerNumero + segundoNumero;
let resultadoResta = primerNumero - segundoNumero;
let resultadoMultiplicacion = primerNumero * segundoNumero;
let resultadoDivision = primerNumero / segundoNumero

// DECLARAR FUNCIONES //

function ejemplo(){
    return "hola, soy una función"
}

//  DECLARAR FUNCIONES EN VARIABLES //

let ejemplo = function ejemplo(){
    return "hola, soy una función expresada"
}

// DECLARAR FUNCIONES CON PARAMETROS //

function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' + apellido + '!';
}

// NUMEROS PARES //

function esPar(numero){
    return numero%2==0
}
console.log(esPar(3))

// DECLARANDO TRES FUNCIONES //

function anterior(numero){
    return numero -1;
}
function triple(numero){
    return numero*3;
}
function anteriorDelTriple(numero){
    return anterior(triple(numero));
}

// MI PRIMER IF //

let dato = true;
if (dato == true){
    console.log("es true");
}else{
    console.log("es false");
}

//IGUALDAD IF Y ELSE //

let lenguaje = "javascript"
​
if (lenguaje === "javascript"){
    console.log("Estoy aprendiendo")
}else{
    console.log("Lo aprenderé mas adelante")
}

// PUEDE PASAR COSME FULANITO //

let nombre = " "
function puedePasar(nombre){
    if (nombre === "Cosme Fulanito"){
        return false;
    }else{
        return true
    }
}

// FIN DE SEMANA //

 let dia = 'jueves'
function finDeSemana (dia) {	
	if (dia == 'viernes') {
    	console.log('buen finde')
	} else if (dia == 'lunes') {
    	console.log('buena semana')
	} else {
    	console.log('buen dia')
	}
}
​
let dia ='jueves';
function finDeSemana(dia){
	switch (dia){
		case 'viernes':
		console.log ('buen finde')
		break;
		case  'lunes':
		console.log ('buena semana')
		break;
		default:
		console.log ('buen dia')
	}
}
finDeSemana(dia);

// TENGO CLASES //

let dia = "viernes";
function tengoClases(dia) {
	switch (dia) {
		case "lunes":
		case "miércoles":
		case "viernes":
		console.log("tenés clases")
		break;
		default:
		console.log("no tenés clases")
	}
}

// REPETIR COMO UN LORO //

function loro(texto){
    for ( i=0 ; i<5 ; i++ ) {
    console.log(texto)
    }
}

// CONTANDO IMPARES //

function noParesDeContarImparesHasta(numero) {
   let contador = 0
    for (let i = 0; i < numero; i++) {
        if (i % 2 != 0) {
            //console.log(i)
            contador++
        }
    }
    return contador
}
noParesDeContarImparesHasta(9)

// CONTEMOS UN WHILE //

function count(desde, hasta) {
    while (desde<hasta){
        console.log("el número actual es " + desde + " y es menor a " + hasta)
        desde++
    }
}

// ENCONTRANDO EL 5 //

let numeros = [2, 3, 5, 8, 5];
let i = 0;
​
function encontreUn5(numeros) {
    do {
        if (numeros[i] == 5) {
            return console.log("Se encontró un 5!")
        }
        console.log(numeros[i])
        i++
    } while (i <= numeros.length)
}
​
encontreUn5(numeros)

// CREANDO LA TABLA DE MULTIPLICAR //

function tablaDeMultiplicar(numero) {
    let i = 1;
    while (i <= 10) {
        console.log(numero + " * " + i + " = " + i * numero);
        i++
    }
}
tablaDeMultiplicar(2)


 //  HAGAMOS UNA CALCULADORA  //

 let suma = (n1,n2) => n1 + n2
let resta = (n1,n2) => n1 - n2
let multiplicacion = (n1,n2) => n1 * n2
let division = (n1,n2) => n1 / n2

function calculadora (n1,n2, callback) {
    return callback ( n1, n2)

}

console.log (calculadora (10,5, resta))