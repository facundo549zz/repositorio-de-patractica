 //PASANDO UN CALLBACK RELOADED//

function agregarHttp(url) {
    return "http://" + url
}
let array = ['www.google.com', 'www.yahoo.com']
let nuevaURL = "";
let nuevoArray = [];
function procesar(paginas, agregarHttp) {
    for (i = 0; i < array.length; i++) {
        nuevaURL = agregarHttp(paginas[i]);
        nuevoArray.push(nuevaURL)
    }
    return nuevoArray;
}
console.log(procesar(array, agregarHttp));


        // INDEXOF 


let alumnos = ["Juan", "Pepe", "Jorge", "Francisco"]

let indiceJuan = alumnos.indexOf("Juan");

let indiceFrancisco = alumnos.indexOf("Francisco")

        // JOIN 

let arrayFrase = [
  "No",
  "he",
  "fracasado,",
  "simplemente",
  "me",
  "he",
  "topado",
  "con",
  "diez",
  "mil",
  "soluciones",
  "equivocadas"
];

let fraseNueva = arrayFrase.join(' ')


        // POP

let estudiantes = [
  {
    nombre: "Alvaro",
    promedio: 9,
    curso: "Android"
  },
  {
    nombre: "Daniel",
    promedio: 6,
    curso: "Full Stack"
  },
  {
    nombre: "Alexis",
    promedio: 3,
    curso: "iOS"
  }
];

let alumnoEgresado = estudiantes.pop("Alexis")


      // PUSH //


 //  FOR OF  (for of para arrays)    //

let peliculas = [ 'zoodiac', '7 pecados capitales', 'perdida', 'zoolander'];

for(let pelicula of peliculas){
console.log(pelicula)
}



        //  for in es para objetos

let directores = 
{
nombre : 'David',
apellido: 'Fincher',
edad: 34
}
{
nombre : 'raul'
apellido
edad
]

directores.forEach(function(director){
console.log(`el director.apellido es ${(director.apellido)} y tiene $(director.edad} años`)
})

        //      DESTRUCTURIN

let peliculas = [ 'zoodiac', '7 pecados capitales', 'perdida', 'zoolander'];

let [siete pecados, , zoolander] = peliculas;   //se deja un espacio para saltear 'perdida'

console.log(sietePecados)
console.log(zoolander)


let directores = 
{
nombre : 'David',
apellido: 'Fincher',
edad: 34
}

let { nombre, edad} = director;

console.log(director)


        //      SPREAD OPERATE

let peliculas1 = [ 'zoodiac', '7 pecados capitales', 'perdida'];
let peliculas2 = ['zoolander', 'red social'];

let peliculasTotales= [...peliculas1, ...peliculas2]
console.log(peliculasTotales)

SPREAD EN OBJETOS

let director = 
{
nombre : 'David',
apellido: 'Fincher',
edad: 34
}

let datosPersonales = {
nacimiento: 
pais: 'Japon'
estado: 'Tokyo'
...director
}

console.log(datosPersonales)
