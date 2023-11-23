// INTRODUCCIÓN A OBJETOS
const estersCat = {
  name: "Coco",
  gender: "non binary",
  age: 2,
  isAthletic: false,
  siblingsNumber: undefined, // Cualquier tipo de dato puede ser el valor de una propiedad
  favoriteFoods: ["tuna", "ham", "fish"],
  // Una propiedad puede incluso tener como valor otros objetos...
  sister: {
    name: "Mango",
    age: 2,
  },
}
// Un objeto es una estructura de datos ordenada por pares clave-valor
// Cada uno de los elementos de un objeto es lo que se conoce como una propiedad.
// Las propiedades de un objeto se dividen en clave - valor (ej: name: "Coco")

// 1) Acceso a propiedades de un objeto
estersCat.name // => "Coco"
// También podemos acceder a una propiedad a través de la notación de los corchetes:
estersCat["name"] // => "Coco"

// 2) Modificar propiedades de un objeto
estersCat.name = "Momo"

// 3) Añadir nuevas propiedades a un objeto
estersCat.isGrumpy = true

// 4) Acceder a múltiples valores de un objeto: Object.values()
// Podemos acceder a múltiples valores de un objeto a través de
Object.values(estersCat) // => ['Momo','non binary',2,false,undefined,[ 'tuna', 'ham', 'fish' ],{ name: 'Mango', age: 2 },true]
// Este método nos permite acceder a todos los valores de un objeto.

// 5) ¿Qué diantres es un Array?
const cutestAnimals = {
  0: "Dolphin",
  1: "Pig",
  2: "Koala",
}
// Como es apreciable en este ejemplo, un array no es más que un objeto cuyas claves son ÍNDICES...
cutestAnimals[0] // => "Dolphin"... Esta sintaxis ya nos suena de algo. Es la sintaxis de los arrays
// Por eso cuando preguntamos por el typeof de un Array obtenemos un tipo "object"

// Todas las claves de un objeto son de tipo "string"
